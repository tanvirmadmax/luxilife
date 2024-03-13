(function ($) {
    "use strict";
    $(document).ready(function () {

        /*
       Jquery Mobile Menu
       ============================*/
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-nav-menu',
            meanScreenWidth: "991",
            meanExpand: ['<i class="fal fa-plus"></i>'],
        });

        /*
       Jquery Header Search
       ============================*/
        $('.search-btn').on('click', function (e) {
            e.preventDefault();
            $('body').css('overflow', 'hidden');

            $('.search-form-wrapper').addClass('active');
        });
        $('.search-close').on('click', function (e) {
            e.preventDefault();
            $('body').css('overflow', 'auto');
            $('.search-form-wrapper').removeClass('active');
        });

        window.onclick = function(e){
            if( e.target.matches(".search-form-wrapper") ){
                $('.search-form-wrapper').removeClass('active');
            }
        }

        /*
       Jquery Sidebar Toggle
       ============================*/
        $(".mobile-menu-toggle-btn").on("click", function () {
            $(".menu-sidebar-area").addClass("active");
            $(".body-overlay").addClass("active");
        });
        $(".menu-sidebar-close-btn").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });

        /*
       Jquery Body Overlay
       ============================*/
        $(".body-overlay").on("click", function () {
            $(".menu-sidebar-area").removeClass("active");
            $(".body-overlay").removeClass("active");
        });
        /*
        Stikey Js
        ============================*/
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

        if (100 < $(window).scrollTop()) {
            $(".header-menu-area.sticky-header").addClass("sticky_menu");
        }
        if( height  > 1400 ) {
            const nav = $(".header-menu-area.sticky-header");
            let scrolled = false;
            $(window).scroll(function () {
                if (100 < $(window).scrollTop() && !scrolled) {
                    nav
                        .addClass("sticky_menu animated fadeIn")
                        .animate({"margin-top": "0px"});
                    scrolled = true;
                }
                if (100 > $(window).scrollTop() && scrolled) {
                    nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                    scrolled = false;
                }
            });
        }

        /*
        Portfolio Hover
        ============================*/
        $('.portfolio-fullscreen').each(function() {
            const item = $(this).find('.single-portfolio-item');
            const img = $(this).find('.tabimg');
            item.on('mouseenter', function() {
                const tab_id = $(this).attr('data-tab');
                item.removeClass('active');
                $(this).addClass('active');
                img.removeClass('active');
                $("#" + tab_id).addClass('active');
                if ($(this).hasClass('active')) {
                    return false;
                }
            });
        });


        /*
        Jquery Empty Post Content Hide
        ============================*/
        $('.blog-area .post-content p').filter(function() {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progressbar').one('inview', function(event, isInView) {
            if (isInView) {
                $('.progress-inner').each(function() {
                    $(this).find('.progress-content').animate({
                        width:$(this).attr('data-percentage')
                    },2000);

                    $(this).find('.progress-number-count').animate(
                        {right:$(this).attr('data-percentage')},
                        {
                            duration: 2000,
                            step: function(now) {
                                let data = Math.round(now);
                                $(this).find('.progress-percent').html(data + '%');
                            }
                        });
                });

            }
        });

        /*
       Slider
       ============================*/
        $(".slider-wrapper").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            rtl: true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        autoplay: true,
                    },
                },
            ],
        });

        /*
       Info Card Slider
       ============================*/
        $("#info_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: true,
            prevArrow:
                "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_one").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 800,
            rtl: true,
            asNavFor: '.testimonial-user-wrapper',
            prevArrow:
                "<button type='button' class='process-arrow-btn prev-btn'><i class='icon-arrow-left-2'></i></button>",
            nextArrow:
                "<button type='button' class='process-arrow-btn next-btn active'><i class='icon-arrow-right-2'></i></button>",
            responsive: [
                {
                    breakpoint: 1023,
                    settings: {
                        autoplay: false,
                        slidesToShow: 1,
                        arrows: false,
                    },
                },
            ],
        });

        // Testimonial User
        const testimonial_user_slide = $('.testimonial-user-wrapper');
        testimonial_user_slide.slick({
            slidesToShow: 9,
            slidesToScroll: 3,
            autoplay: true,
            loop: false,
            infinite: false,
            asNavFor: '#testimonial_one',
            dots: false,
            centerMode: false,
            focusOnSelect: true,
            arrows:false,
            draggable: false,
            rtl: true
        });

        testimonial_user_slide.each(function() {
            const item = $(this).find('.single-user');
            item.on('mouseenter', function() {
                $(this).trigger('click');
            });
        });
        /*
       Testimonial Slider
       ============================*/
        $("#testimonial_two").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            variableWidth: true,
            rtl: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });

        $('.slider-nav-prev-btn').on('click', function (e) {
            e.preventDefault();
            $('.slick-prev').trigger('click');
        });
        $('.slider-nav-next-btn').on('click', function (e) {
            e.preventDefault();
            $('.slick-next').trigger('click');
        });

        /*
       Feature Slider JS
       ============================*/
        $(".feature-slider-wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            centerMode: true,
            loop: true,
            dots: true,
            speed: 1500,
            rtl: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
        /*
       Related Portfolio Slider
       ============================*/
        $("#related_portfolio").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: true,
            prevArrow:
                "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow:
                "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        }).on('setPosition', function (event, slick) {
            slick.$slides.css('height', slick.$slides.width() + 'px');
        });
        $('.portfolio-slider-wrapper').attr('dir', 'rtl');

        /*
       Post Gallery Slider
       ============================*/
        $(".post-gallery").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 300,
            rtl: true,
            prevArrow:
                "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:
                "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        /*
       Client Logo Slider
       ============================*/
        $(".client-logo-slider-wrapper").slick({
            slidesToShow: 5,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        /*
        Counter Js
        ============================*/
        $(".counter").counterUp({
            delay: 10,
            time: 1000,
        });

        /*
       Magnific Popup
       ============================*/
        $(".video-play").magnificPopup({
            disableOn: 700,
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
        });

        /*
        Jquery Wow Js
        ============================*/
        new WOW().init();

        /*
       Jquery Nice Select Js
       ============================*/
        $('select.select_option, select.wpcf7-select').niceSelect();

        /*
       Jquery Tilt Js
       ============================*/
        $('.tilt-animate').tilt({
            maxTilt: 12,
            perspective: 1500,
        })

        // Jquery Parallax Js
        // $('.testimonial-user-wrapper').parallax();


        /*
        Isotope Grid Js
        ============================*/
        $('.portfolio-filter').on('click', 'li', function() {
            $("li").removeClass("active");
            $(this).addClass("active");
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.isotope-grid').isotope({
            itemSelector: '.masonry-portfolio-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.masonry-portfolio-item'
            }
        })
        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });


        // Accordion Init Height
        const accordionEl = $(".accordion-box-wrapper");
        const  accordionHeight = accordionEl.innerHeight();
        accordionEl.css("height",accordionHeight);


        /*
        Circle Rotate Text In JS
        ============================*/
        const circleRotateElm = $(".circle-rotate-text");
        if (circleRotateElm.length) {
            circleRotateElm.each(function() {
                const elm = $(this);
                const options = elm.data("circle-text");
                if (typeof options === 'string') {
                    const parsedOptions = JSON.parse(options);
                    elm.circleType(parsedOptions);
                } else if (typeof options === 'object') {
                    elm.circleType(options);
                }
            });
        }

        /*
        Scroll To Top Js
        ============================*/
        $(function () {
            $("#scrollTop").hide();
            var position = $(window).scrollTop();
            var timer;
            $(window).on('scroll', function () {
                var scrollTop = $(window).scrollTop();
                clearTimeout(timer);
                if (scrollTop > 100) {
                    if (scrollTop > position) {
                        $('#scrollTop').fadeOut();
                    } else {
                        $('#scrollTop').fadeIn();
                        timer = window.setTimeout(function() {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
                return false;
            });
        });


        /*
        Window Load
        ============================*/
        $(window).on("load", function() {
            /*
            Preeloader
            ============================*/
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({"overflow-x": "hidden"});

        });
        
    });
})(jQuery);
