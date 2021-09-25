function hideMenu() {
    $('.submenu_projects').slideUp(600);
}
function showMenu() {
    $('.submenu_projects').slideDown(600);
}
function rotate() {
    $('.cube:hover').css('transform', 'rotateX(0deg) rotateY(-90deg) translateZ(-40px)');
}
function rotateBack() {
    $('.cube:hover').css('transform', 'rotateX(0deg) rotateY(0deg)');
}
$(document).ready(function () {
    $('.menu_projects').on('mouseover', showMenu);
    $('.menu_projects_hover').on('mouseleave', hideMenu);
    $('.arrow_detail').on('click', rotate);
    $('.right').on('click', rotateBack);

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

