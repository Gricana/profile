function hideMenu() {
    $('.submenu_projects').slideUp(600);
}
function showMenu() {
    $('.submenu_projects').slideDown(600);
}
function rotate() {
    if (!($('.steps .wrap:last-child .cube:hover').length <= 0)) {
        $('.cube:hover').css('transform', 'rotateX(0deg) rotateY(90deg) translateZ(-50px)');
    } else {
          $('.cube:hover').css('transform', 'rotateX(0deg) rotateY(-90deg) translateZ(-50px)');
    }
}
function rotateBack() {
    $('.cube:hover').css('transform', 'rotateX(0deg) rotateY(0deg)');
}
$(document).ready(function () {
    $('.menu_projects').on('mouseover', showMenu);
    $('.menu_projects_hover').on('mouseleave', hideMenu);
    $('.arrow_detail').on('click', rotate);
    $('.right').on('click', rotateBack);

    $(window).scroll(() => {
        if ($(this).scrollTop() > 100) {
            $('.arrow_up').fadeIn();
        } else {
            $('.arrow_up').fadeOut();
        }
    });

    $('.arrow_up').click(() => {
        $('html, body').animate({scrollTop: 0}, 600);
        return false;
    });
});

