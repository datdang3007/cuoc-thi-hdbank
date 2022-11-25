var currentType = ''

LoadingDelay = (timeout) => {
    $('.loading-animation').fadeIn(300);
    setTimeout(() => {
        $('.loading-animation').fadeOut(300);
    }, timeout);
}

ContinueRegister = () => {
    $('.form-register-content').hide();
    $('.form-register-content').html(`
        <button type="button" class="btn-back-register-form mt-2">
            <i class="fa-regular fa-circle-left"></i>
        </button>

        <div class="header-form-register-content">
            <h1 class="title-welcome">CTBank kính chào!</h1>
            <span class="title-signup">
                Bạn đã có tài khoản?
                <a href="" id="btnLogin">Đăng Nhập</a>
            </span>
        </div>

        <form action="">
            <div class="form-group-register mt-4">
                <label class="form-register-label" for="fullname-register-form">Họ Tên</label>
                <input type="text" class="form-control form-register-input mt-1" id="fullname-register-form" placeholder="Nhập họ tên">
            </div>

            <div class="form-group-register mt-3">
                <label class="form-register-label" for="email-register-form">Email</label>
                <input type="email" class="form-control form-register-input mt-1" id="email-register-form" placeholder="Nhập email">
            </div>

            <div class="form-group-register mt-3">
                <label class="form-register-label" for="idcard-register-form">CMND/CCCD</label>
                <input type="number" onkeydown="return (event.keyCode !== 69 && event.keyCode !== 107 && event.keyCode !== 189 && event.keyCode !== 187)" class="form-control form-register-input mt-1" id="idcard-register-form" placeholder="Nhập số CMND/CCCD">
            </div>
            
            <button type="button" class="btn btn-continue-register-form mt-4">
                <i class="fa-solid fa-shield shield"></i>
                Đăng Ký
            </button>
        </form> 
    `);
    $('.form-register-content').show();
    $('.form-register-content').addClass('comein');
    setTimeout(() => {
        $('.form-register-content').removeClass('comein');
    }, 700);
};

AddEvent = () => {
    $('#btnLogin').click((event) => {
        event.preventDefault();
        $('.page').fadeOut(300);
        setTimeout(() => {
            window.location.href = '/loginpage.html'
        }, 300);
    });
    $('.btn-continue-register-form').click((event) => {
        event.preventDefault();
        $('.form-register-content').addClass('runaway');
        setTimeout(() => {
            $('.form-register-content').removeClass('runaway');
            ContinueRegister();
        }, 700);
    });
};

// Khi trang web mới load xong:
$(window).ready(() => {
    $('.page').hide();
    LoadingDelay(1200);
    setTimeout(() => {
        AddEvent();
        setTimeout(() => {
            $('.page').fadeIn(300);
        }, 300);
    }, 1200);
});