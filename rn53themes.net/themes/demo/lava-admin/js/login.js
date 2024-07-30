$(document).ready(function() {
    // Tạo nội dung HTML cho form đăng nhập
    $('body').html(`
        <div class="blog-login">
        <div class="blog-login-in">
            <form>
                <img src="images/logo.png" alt="" />
                <div class="row">
                    <div class="input-field col s12">
                        <input id="first_name1" type="text" class="validate">
                        <label for="first_name1">User Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input id="last_name" type="password" class="validate">
                        <label for="last_name">Password</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <a class="waves-effect waves-light btn-large btn-log-in" href="index-2.html">Login</a>
                    </div>
                </div>
                <a href="forgot.html" class="for-pass">Forgot Password?</a>
            </form>
        </div>
    </div>
    `);

    // Thêm sự kiện click cho nút đăng nhập
    $('#login-button').on('click', function() {
        // Lấy giá trị của email và mật khẩu
        var email = $('#email').val();
        var password = $('#password').val();

        // Gửi yêu cầu AJAX đến backend để kiểm tra thông tin đăng nhập
        $.ajax({
            url: 'http://localhost:6869/auth/login', // URL của backend
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
                username: email, // Sử dụng email như tên đăng nhập
                password: password
            }),
            success: function(response) {
                // Giả sử phản hồi có một thuộc tính 'success' để xác định xem đăng nhập có thành công không
                if (response.success) {
                    // Chuyển hướng đến trang indexx.html nếu đăng nhập thành công
                    window.location.href = 'index.html';
                } else {
                    // Hiển thị thông báo lỗi nếu đăng nhập không thành công
                    alert('Email hoặc mật khẩu không đúng');
                }
            },
            error: function(err) {
                console.error('Error logging in', err);
                alert('Có lỗi xảy ra khi đăng nhập. Vui lòng thử lại sau.');
            }
        });
    });
});
