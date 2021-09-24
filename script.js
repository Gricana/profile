function hideMenu() {
    $('.submenu_projects').slideUp(600);
}
function showMenu() {
    $('.submenu_projects').slideDown(600);
}
function rotate() {
    $('.first').css('transform', 'rotate3d(0, -1, 0, 90deg)').css('transition','all 2s');
}
$(document).ready(function () {
    $('.menu_projects').on('mouseover', showMenu);
    $('.menu_projects_hover').on('mouseleave', hideMenu);
    $('.arrow_detail').on('click', rotate)

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.arrow_up').fadeIn();
        } else {
            $('.arrow_up').fadeOut();
        }
    });

    $('.arrow_up').click(function () {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});

