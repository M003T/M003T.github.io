$(document).ready(function() {

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function() {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                    $('.anchor').addClass('first');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                    $('.anchor').removeClass('first');
                }
            })
        }
    }

    navbarFixed();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
        console.log($(this).scrollTop());
    });
    $('#back-to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    // Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

})

// Progressbars
/*
var i = 0;
function makeProgress(){
    if(i < 100){
        i = i + 1;
        $(".progress-bar").css("width", i + "%").text(i + "%");
    }

    // Wait for sometime before running this script again
    setTimeout("makeProgress()", 100);
}
makeProgress();
*/