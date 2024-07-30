$(document).ready(function() {
    // Xử lý khi tài liệu HTML đã sẵn sàng

    // Tạo và thêm form vào trong phần tử có id là 'content'
    var formHtml = `
        <div class="bor">
            <form id="hotelForm">
                <div class="row">
                    <div class="input-field col s12">
                        <input id="hotelName" type="text" class="validate">
                        <label for="hotelName">Hotel Name</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="phone" type="text" class="validate">
                        <label for="phone">Phone</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="userID" type="text" class="validate">
                        <label for="userID">User ID</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="rating" type="text" class="validate">
                        <label for="rating">Rating</label>
                    </div>
                    <div class="input-field col s12">
                        <textarea id="description" class="materialize-textarea"></textarea>
                        <label for="description">Hotel Description</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="time" id="openTime" name="open-time" class="validate">
                        <label for="openTime">Open Time</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="time" id="closeTime" name="close-time" class="validate">
                        <label for="closeTime">Close Time</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="time" id="checkInTime" name="checkin-time" class="validate">
                        <label for="checkInTime">Check-in Time</label>
                    </div>
                    <div class="input-field col s6">
                        <input type="time" id="checkOutTime" name="checkout-time" class="validate">
                        <label for="checkOutTime">Check-out Time</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="avatar" type="text" class="validate">
                        <label for="avatar">Avatar URL</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="city" type="text" class="validate">
                        <label for="city">City</label>
                    </div>
                    <div class="input-field col s6">
                        <input id="district" type="text" class="validate">
                        <label for="district">District</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="streetNumber" type="text" class="validate">
                        <label for="streetNumber">Street Number</label>
                    </div>
                    <div class="input-field col s12">
                        <input id="streetName" type="text" class="validate">
                        <label for="streetName">Street Name</label>
                    </div>
                    <div class="file-field input-field col s12">
                        <div class="btn">
                            <span>File</span>
                            <input type="file" multiple>
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" placeholder="Upload one or more files">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12" style="text-align:center;">
                        <input type="submit" class="waves-effect waves-light btn-large" value="Submit">
                    </div>
                </div>
            </form>
        </div>
    `;

    // Thêm form vào trong phần tử có id là 'content'
    $('#content').html(formHtml);

    // Xử lý sự kiện khi submit form
    $('#hotelForm').submit(function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy dữ liệu từ các trường input
        var hotelName = $('#hotelName').val();
        var phone = $('#phone').val();
        var userID = $('#userID').val();
        var rating = $('#rating').val();
        var description = $('#description').val();
        var openTime = $('#openTime').val();
        var closeTime = $('#closeTime').val();
        var checkInTime = $('#checkInTime').val();
        var checkOutTime = $('#checkOutTime').val();
        var avatar = $('#avatar').val();
        var city = $('#city').val();
        var district = $('#district').val();
        var streetNumber = $('#streetNumber').val();
        var streetName = $('#streetName').val();

        // Xử lý dữ liệu (validation, ...)

        // Tạo object dữ liệu để gửi lên server
        var formData = {
            name: hotelName,
            phone: phone,
            userID: parseInt(userID), // Chuyển sang kiểu số nguyên
            rating: parseFloat(rating), // Chuyển sang kiểu số thực
            description: description,
            openTime: openTime,
            closeTime: closeTime,
            checkInTime: checkInTime,
            checkOutTime: checkOutTime,
            avatar: avatar,
            hotelAddressDTO: {
                city: city,
                district: district,
                streetNumber: streetNumber,
                streetName: streetName
            }
            // Thêm các trường khác nếu cần
        };

        // Gửi request AJAX để thêm khách sạn
        $.ajax({
            url: 'http://localhost:9091/hotel',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(formData),
            success: function(response) {
                alert('Hotel added successfully');
                // Có thể thực hiện các thao tác tiếp theo sau khi thêm thành công
                location.reload(); // Reload trang sau khi thêm thành công (tùy nhu cầu)
            },
            error: function(error) {
                console.error('Error adding hotel', error);
                alert('Failed to add hotel. Please try again.');
            }
        });
    });
});
