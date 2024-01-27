(function ($) {
    "use strict";
    jQuery(window).load(function () {
        new WOW().init();


    });
})(jQuery);


$(document).ready(function () {
    $('.btn-button').on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
    });
});

window.onscroll = function () {
    var backToTo = document.querySelector(".btn-button");
    document.body.scrollTop;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 0) {
        backToTo.style.display = "flex";
    }
};
