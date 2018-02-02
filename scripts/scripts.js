AOS.init();

const $page = $('body, html');
const $navbarLinks = $('.nav-link');
const $goUpBtn = $('.btn-secondary');


function scrollToSection () {
    const anchorAttr = $(this).attr('href');

    $page.animate({scrollTop: $(anchorAttr).offset().top}, 800);
}

function scrollToTop () {
    $page.animate({scrollTop: 0}, 800);
}

function hideGoUpBtn () {
    const $window = $(window).scrollTop();

    $window > 400 ? $goUpBtn.fadeIn() : $goUpBtn.fadeOut();
}

$(window).on('scroll', hideGoUpBtn);

$navbarLinks.on('click', scrollToSection);

$goUpBtn.on('click', scrollToTop);