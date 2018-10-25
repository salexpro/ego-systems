/* 
@codekit-prepend quiet '../../node_modules/jquery/dist/jquery.slim.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.core.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min.js';
@codekit-prepend quiet '../../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min.js';
@codekit-prepend quiet '../../node_modules/owl.carousel/dist/owl.carousel.min';

@codekit-append quiet 'components/_carousel.js';
*/

$(document).foundation();

const header = $('.header');
let scrolling = false,
    prev_top = 0,
    scrollDelta = 10,
    scrollOffset = 300;

const header_fill = () => {
    if (header.offset().top > 40) {
        header.addClass('is_filled');
    } else if (!$('html').hasClass('is-reveal-open')){
        header.removeClass('is_filled');
    }
}

const auto_hide = () => {
    const curr_top = $(window).scrollTop();

    if (prev_top - curr_top > scrollDelta) {
        //if scrolling up...
        header.removeClass('is_hidden');
    } else if (curr_top - prev_top > scrollDelta && curr_top > scrollOffset) {
        //if scrolling down...
        header.addClass('is_hidden');
    }

    prev_top = curr_top;
    scrolling = false;
}

header_fill();

$(window).scroll(() => {
    header_fill();
    if (!scrolling) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(auto_hide, 250): requestAnimationFrame(auto_hide);
    }
});

$('.header_hamb').click(function () {
    $(this).addClass('is_active');
    $('#menu').foundation('open');
})

$('#menu').on('closed.zf.offcanvas', () => {
    $('.header_hamb').removeClass('is_active');
});