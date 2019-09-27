$(document).ready(function () {
    var scrollTop = 0;
    var winH = 0;
    $('.container').scroll(function () {
        scrollTop = $('.container').scrollTop();
        winH = $(window).height();

        if (scrollTop >= 200) {
            $('.navbar').addClass('navbar-alt');
        } else {
            $('.navbar').removeClass('navbar-alt');
        }

        if (scrollTop >= winH) {
            $('.topBtn').removeClass('hidden');
        } else {
            $('.topBtn').addClass('hidden');
        }
    });
});
