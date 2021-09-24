function hideMenu() {
    $('.submenu_projects').slideUp(600);
}
function showMenu() {
    $('.submenu_projects').slideDown(600);
}
$(document).ready(function () {
    $('.menu_projects').on('mouseover', showMenu);
    $('.menu_projects_hover').on('mouseleave', hideMenu);

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

