var currentType = ''

LoadingDelay = (timeout) => {
    $('.loading-animation').fadeIn(300);
    setTimeout(() => {
        $('.loading-animation').fadeOut(300);
    }, timeout);
}

RenderLoginPage = (layout) => {
    if (layout == "large") {
        var base = `
            <div class="row row-login-page w-100" style="height: 100vh">
                <div class="logo-ct-bank col-3 h-100">
                    <div class="img-logo-ctbank-big"></div>
                </div>  
                <div class="form-login col-9 d-flex align-items-center justify-content-center">
                    <div class="img-decor-form-login">
                        <p>Cam Kết Lợi Ích Cao Nhất</p>
                    </div>
                    <div class="form-login-content">
                        <div class="header-form-login-content">
                            <h1 class="title-welcome">CTBank kính chào!</h1>
                            <span class="title-signup">
                                Bạn chưa có tài khoản?
                                <a href="" id="btnRegister">Đăng Ký</a>
                            </span>
                        </div>

                        <form action="">
                            <div class="form-group-login mt-4">
                                <label class="form-login-label" for="email-login-form">Email</label>
                                <input type="email" class="form-control form-login-input mt-1" id="email-login-form" placeholder="Nhập email">
                            </div>

                            <div class="form-group-login mt-3">
                                <label class="form-login-label" for="password-login-form">Mật Khẩu</label>
                                <input type="password" class="form-control form-login-input mt-1" id="password-login-form" placeholder="Nhập mật khẩu">
                            </div>

                            <div class="form-group-checkbox mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="cbRememberme">
                                <label class="form-check-label form-group-checkbox-rememberme-label" for="cbRememberme">
                                    Ghi nhớ tài khoản
                                </label>
                            </div>
                            
                            <button type="button" class="btn btn-login-form mt-3">
                                <i class="fa-solid fa-shield"></i>
                                Đặng Nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `
        $('.page').html(base);
    } else if (layout == "medium") {
        var base = `
            <div class="row row-login-page w-100" style="height: 100vh">
                <div class="logo-ct-bank col-12" style="position:absolute; top:0px; left:0px; height: 100px">
                    <div class="img-logo-ctbank-big" style="background-size: 80px;"></div>
                </div>  
                <div class="form-login col-12 d-flex align-items-center justify-content-center">
                    <div class="form-login-content">
                        <div class="header-form-login-content">
                            <h1 class="title-welcome">CTBank kính chào!</h1>
                            <span class="title-signup">
                                Bạn chưa có tài khoản?
                                <a href="" id="btnRegister">Đăng Ký</a>
                            </span>
                        </div>

                        <form action="">
                            <div class="form-group-login mt-4">
                                <label class="form-login-label" for="email-login-form">Email</label>
                                <input type="email" class="form-control form-login-input mt-1" id="email-login-form" placeholder="Nhập email">
                            </div>

                            <div class="form-group-login mt-3">
                                <label class="form-login-label" for="password-login-form">Mật Khẩu</label>
                                <input type="password" class="form-control form-login-input mt-1" id="password-login-form" placeholder="Nhập mật khẩu">
                            </div>

                            <div class="form-group-checkbox mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="cbRememberme">
                                <label class="form-check-label form-group-checkbox-rememberme-label" for="cbRememberme">
                                    Ghi nhớ tài khoản
                                </label>
                            </div>
                            
                            <button type="button" class="btn btn-login-form mt-3">
                                <i class="fa-solid fa-shield"></i>
                                Đặng Nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `
        $('.page').html(base);
    } else if (layout == "small") {
        var base = `
            <div class="row row-login-page w-100" style="height: 650px">
                <div class="logo-ct-bank col-12" style="position:absolute; top:0px; left:0px; height: 100px">
                    <div class="img-logo-ctbank-big" style="background-size: 80px;"></div>
                </div>
                <div class="form-login col-12 d-flex align-items-center justify-content-center" style="height: 650px">
                    <div class="form-login-content">
                        <div class="header-form-login-content">
                            <h1 class="title-welcome" style="font-size: 7vw;">CTBank kính chào!</h1>
                            <span class="title-signup" style="font-size: 2.75vw;">
                                Bạn chưa có tài khoản?
                                <a href="" id="btnRegister">Đăng Ký</a>
                            </span>
                        </div>

                        <form action="">
                            <div class="form-group-login mt-4">
                                <label class="form-login-label" for="email-login-form">Email</label>
                                <input type="email" class="form-control form-login-input mt-1" id="email-login-form" placeholder="Nhập email">
                            </div>

                            <div class="form-group-login mt-3">
                                <label class="form-login-label" for="password-login-form">Mật Khẩu</label>
                                <input type="password" class="form-control form-login-input mt-1" id="password-login-form" placeholder="Nhập mật khẩu">
                            </div>

                            <div class="form-group-checkbox mt-3">
                                <input class="form-check-input" type="checkbox" value="" id="cbRememberme">
                                <label class="form-check-label form-group-checkbox-rememberme-label" for="cbRememberme">
                                    Ghi nhớ tài khoản
                                </label>
                            </div>
                            
                            <button type="button" class="btn btn-login-form mt-3">
                                <i class="fa-solid fa-shield"></i>
                                Đặng Nhập
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `
        $('.page').html(base);
    };
};

checkDisplayWidth = () => {
    const displayWidth = $(window).width();
    if (displayWidth >= 912 && currentType != "large") {
        currentType = 'large';
        RenderLoginPage(currentType);
    } else if (displayWidth >= 576 && displayWidth < 912 && currentType != "medium") {
        currentType = 'medium';
        RenderLoginPage(currentType);
    } else if (displayWidth < 576 && currentType != "small") {
        currentType = 'small';
        RenderLoginPage(currentType);
    };
};

// Khi trang web mới load xong:
$(window).ready(() => {
    $('.page').hide();
    LoadingDelay(1200);
    setTimeout(() => {
        checkDisplayWidth();
        setTimeout(() => {
            $('.page').fadeIn(300);
        }, 300);
    }, 1200);
});

// Khi trang web mới bị thay đổi kích thước:
$(window).resize(() => {
    checkDisplayWidth();
});