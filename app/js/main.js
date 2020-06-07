$(function () {
    // ================ SLIDER ===================
    $('.about__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
    });
    // ================ SLIDER ===================


    // ================ MENU BURGER ===================
    document.querySelector('.menu__burger').onclick = function () {
        this.classList.toggle('active');
    };



    $('#menu__burger').on('click', function(event) {
        event.preventDefault();

        $('#nav').toggleClass('active');
    });
    // ================ MENU BURGER ===================

    // ================ MENU FIXED ===================
    var menu = $("#menu"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

    });


    function checkScroll(scrollOffset) {

        if (scrollOffset >= headerH) {
            menu.addClass("menu__fixed");
        } else {
            menu.removeClass("menu__fixed");
        }
    }
    // ================ MENU FIXED ===================

    // ================ Smooth scroll ===================
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll');
            blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
    });
    // ================ Smooth scroll ===================

    

});