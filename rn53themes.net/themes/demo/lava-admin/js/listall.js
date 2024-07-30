$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:6869/hotel/all',
        method: 'GET',
        success: function(data) {
            var rows = '';
            data.forEach(function(hotel) {
                // Lấy thông tin người dùng
                // var user = hotel.userDTOList && hotel.userDTOList.length > 0 ? hotel.userDTOList[0] : null;
                var user = hotel.userDTOList.length > 0 ?  hotel.userDTOList[0] : null
                var userAvatar = hotel ? hotel.avartar : ''
                var userEmail = user ? user.email : 'N/A'; // Default email if not available

                // Lấy thông tin địa chỉ
                // var cityName = hotel.hotelAddressDTO ? hotel.hotelAddressDTO.city : '';
                var city = hotel.hotelAddressDTO ? hotel.hotelAddressDTO.city : '';

                var streetNumber = hotel.hotelAddressDTO ? hotel.hotelAddressDTO.streetNumber : '';
                var streetName = hotel.hotelAddressDTO ? hotel.hotelAddressDTO.streetName : '';

                var district = hotel.hotelAddressDTO ? hotel.hotelAddressDTO.district :'';
                // var district = hotelAddressDTO ? hotel.hotelAddressDTO.city : '';
                // Tạo hàng bảng
                rows += `
                    <tr>
                        <td><span class="list-img"><img src="${userAvatar}" alt=""></span></td>
                        <td><a href="#"><span class="list-enq-name">${hotel.name}</span><span class="list-enq-city">${city}, ${district}</span></a></td>
                        <td>${hotel.phone}</td>
                        <td>${userEmail}</td>
                        <td>${streetNumber} ${streetName}</td>
                        <td>
                            <a href="hotel-view.html?id=${hotel.id}"><i class="fa fa-eye" aria-hidden="true"></i></a>
                        </td>
                        <td>
                            <a href="hotel-edit.html?id=${hotel.id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a>
                        </td>
                        <td>
                            <a href="#" onclick="deleteHotel(${hotel.id})"><i class="fa fa-trash-o" aria-hidden="true"></i></a>
                        </td>
                    </tr>
                `;
            });
            $('tbody').html(rows);
        },
        error: function(err) {
            console.error('Error fetching hotel data', err);
        }
    });
});

// function deleteHotel(id) {
//     if (confirm('Are you sure you want to delete this hotel?')) {
//         $.ajax({
//             url: 'http://localhost:6869/hotel/' + id,
//             method: 'DELETE',
//             success: function() {
//                 alert('Hotel deleted successfully');
//                 location.reload();
//             },
//             error: function(err) {
//                 console.error('Error deleting hotel', err);
//             }
//         });
//     }
// }
