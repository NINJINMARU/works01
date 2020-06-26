
$(function () {
    $('.fa-bars').click(function () {
        $('.navbar-toggler').fadeOut();
        $('.navbar-shrink-list').css('right', '0');
    });
    $('.fa-times,.navbar-shrink-item').click(function () {
        $('.navbar-shrink-list').css('right', '-100%');
        $('.navbar-toggler').fadeIn();
    });
});
