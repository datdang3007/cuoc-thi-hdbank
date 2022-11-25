var currentType = ''

LoadingDelay = (timeout) => {
    $('.loading-animation').fadeIn(300);
    setTimeout(() => {
        $('.loading-animation').fadeOut(300);
    }, timeout);
}

AddEvent = () => {
    $('#btnRegister').click((event) => {
        event.preventDefault();
        $('.page').fadeOut(300);
        setTimeout(() => {
            window.location.href = '/RegisterPage/registerpage.html'
        }, 300);
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