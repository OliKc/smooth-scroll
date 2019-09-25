$(document).ready(function () {
    var scrollTop = 0;
    $('.container').scroll(function () {
        scrollTop = $('.container').scrollTop();
        
        if (scrollTop >= 200) {
            $('.navbar').addClass('navbar-alt');
        } else if (scrollTop < 200) {
            $('.navbar').removeClass('navbar-alt');
        }
    });
});
