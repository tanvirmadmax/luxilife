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

        window.onclick = function (e) {
            if (e.target.matches(".search-form-wrapper")) {
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

        // const handleScroll = () => {
        //     const $this = $(window);
        //     const $wpAdminbar = $("#wpadminbar");
        //     const $topBar = $(".header-top");
        //     const $menuBar = $(".sticky-header");
        //     const topBarHeight = $topBar.outerHeight();
        //     const menuBarHeight = $menuBar.outerHeight();
        //     const wpBarHeight = $wpAdminbar.outerHeight();
        //
        //     if ($("header").hasClass("login")) {
        //         if ($this.scrollTop() > topBarHeight) {
        //             $topBar.add($menuBar).addClass("sticky_menu");
        //             $topBar.css({ "margin-top": menuBarHeight });
        //             $menuBar.css({ top: wpBarHeight });
        //         } else {
        //             $topBar.add($menuBar).removeClass("sticky_menu");
        //             $topBar.css({ "margin-top": "auto" });
        //             $menuBar.css({ top: "auto" });
        //         }
        //     }
        //     else {
        //         if ($this.scrollTop() > topBarHeight) {
        //             $topBar.add($menuBar).addClass("sticky_menu");
        //             $topBar.css({ "margin-top": menuBarHeight });
        //         } else {
        //             $topBar.add($menuBar).removeClass("sticky_menu");
        //             $topBar.css({ "margin-top": "auto" });
        //         }
        //     }
        // };
        // $(window).on("scroll", handleScroll);


        $(document).ready(function () {
            const body = document.body;
            const html = document.documentElement;
            const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

            if (100 < $(window).scrollTop()) {
                $(".header-menu-area.sticky-header").addClass("sticky_menu");
            }

            if (height > 1400) {
                const nav = $(".header-menu-area.sticky-header");
                let scrolled = false;

                $(window).scroll(function () {
                    if (100 < $(window).scrollTop() && !scrolled) {
                        nav
                            .addClass("sticky_menu animated fadeIn")
                            .animate({"margin-top": "0px"}, 300); // 300 milliseconds for smooth scroll
                        scrolled = true;
                    }

                    if (100 > $(window).scrollTop() && scrolled) {
                        nav.removeClass("sticky_menu animated fadeIn").css("margin-top", "0px");
                        scrolled = false;
                    }
                });
            }
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
            rtl: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
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
                        slidesToShow: 1,
                    },
                },
            ],
        });

        /*
        Portfolio Hover
        ============================*/
        $('.portfolio-showscreen').each(function () {
            const item = $(this).find('.portfolio-card');
            const img = $(this).find('.tabimg');
            item.on('mouseenter', function () {
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
        $('.blog-area .post-content p').filter(function () {
            return /\u00A0/.test($(this).text());
        }).hide();


        /*
        Skill Progress Bar Js
        ============================*/
        $('.skill-progress-card').each(function() {
            let section = $(this);
            section.one('inview', function(event, isInView) {
                if (isInView) {
                    section.find('.progress-inner').each(function() {
                        $(this).find('.progress-content').animate({
                            width: $(this).attr('data-percentage')
                        }, 2000);
                        $(this).find('.progress-number-count').animate(
                            {
                                left: $(this).attr('data-percentage')
                            },
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
            vertical: true,
            rtl: false,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-arrow-left-long'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-arrow-right-long'></i></button>",

            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: true,
                },
            }, ],
        });
        $(".slider-wrapper-six").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            prevArrow: "<button type='button' class='prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='next-btn'><i class='fa-solid fa-angle-right'></i></button>",

            responsive: [{
                breakpoint: 767,
                settings: {
                    autoplay: true,
                    arrows: false,
                    dots: true,
                },
            }, ],
        });


        /*
        Hero Gallery Slider
        ============================*/
        $(".hero-gallery-slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            prevArrow: '<button class="slick-arrow btn-prev"><i class="fa-solid fa-chevron-left"></i></button>',
            nextArrow: '<button class="slick-arrow btn-next"><i class="fa-solid fa-chevron-right"></i></button>',
            slidesToScroll: 1,
            variableWidth: true,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
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
            rtl: false,
            prevArrow: "<button type='button' class='info-card-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='info-card-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [{
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
        $("#testimonial_style_one").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            variableWidth: true,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1199,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: true,
                        variableWidth: false,
                        speed: 1500,
                    },
                },
            {
                breakpoint: 991,
                    settings: {
                        autoplay: true,
                        slidesToShow: 2,
                        arrows: true,
                        variableWidth: false,
                        speed: 1500,
                    },
            },
            {
                breakpoint: 767,
                    settings: {
                        autoplay: true,
                        slidesToShow: 1,
                        arrows: true,
                        variableWidth: false,
                        speed: 1500,
                    },
            },
            ],
        });

        $('#testimonial_one_prev_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_one .slick-prev').trigger('click');
        });
        $('#testimonial_one_next_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_one .slick-next').trigger('click');
        });

        /*
        Testimonial Slider
        ============================*/
        $("#testimonial_style_two").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    arrows: true,
                },
            }, ],
        });

        $('#testimonial_two_prev_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_two .slick-prev').trigger('click');
        });
        $('#testimonial_two_next_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_two .slick-next').trigger('click');
        });


        /*
        Testimonial Slider
        ============================*/
        $("#testimonial_style_three").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                breakpoint: 1023,
                settings: {
                    autoplay: true,
                    slidesToShow: 1,
                    arrows: true,
                },
            }, ],
        });

        $('#testimonial_three_prev_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_three .slick-prev').trigger('click');
        });
        $('#testimonial_three_next_btn').on('click', function (e) {
            e.preventDefault();
            $('#testimonial_style_three .slick-next').trigger('click');
        });


        /*
        Testimonial Slider
        ============================*/
        $("#testimonial_style_four").slick({
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            variableWidth: true,
            centerMode: true,
            rtl: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });


        /*
        Testimonial Slider
        ============================*/
        $("#testimonial_style_five").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            variableWidth: true,
            rtl: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        centerMode: true,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
            ],
        });


        /*
        Project Card Slider
        ============================*/
        $("#project_card_slider").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: true,
            speed: 1500,
            rtl: false,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
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
            rtl: false,
            responsive: [{
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
        Post Card Slider
        ============================*/
        $("#post_card_slider_wrapper").slick({
            slidesToShow: 3,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: true,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                    },
                },
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

        $('.latest-posts-area .slider-nav-prev-btn').on('click', function (e) {
            e.preventDefault();
            $('#post_card_slider_wrapper .slick-prev').trigger('click');
        });
        $('.latest-posts-area .slider-nav-next-btn').on('click', function (e) {
            e.preventDefault();
            $('#post_card_slider_wrapper .slick-next').trigger('click');
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
            rtl: false,
            prevArrow: "<button type='button' class='portfolio-arrow-btn prev-btn'><i class='fa-solid fa-angle-left'></i></button>",
            nextArrow: "<button type='button' class='portfolio-arrow-btn next-btn'><i class='fa-solid fa-angle-right'></i></button>",
            responsive: [{
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
            rtl: false,
            prevArrow: "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
            nextArrow: "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
        });
        /*
       Portfolio Logo Slider
       ============================*/
        $(".portfolio-slider").slick({
            slidesToShow: 2,
            infinite: true,
            autoplay: false,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            variableWidth: true,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                    },
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                        centerMode: false,
                        dots: true,
                    },
                },
                {
                    breakpoint: 460,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: false,
                        centerMode: false,
                        dots: true,
                    },
                },
            ],
        });

        // Team Area slider
        $(".team-area-slider-wrapper").slick({
            slidesToShow: 4,
            infinite: true,
            autoplay: true,
            draggable: true,
            arrows: false,
            slidesToScroll: 1,
            loop: true,
            dots: false,
            speed: 1500,
            rtl: false,
            responsive: [{
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
        $('.portfolio-filter').on('click', 'li', function () {
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
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });


        // Accordion Init Height
        const accordionEl = $(".accordion-box-wrapper");
        const accordionHeight = accordionEl.innerHeight();
        accordionEl.css("height", accordionHeight);


        /*
        Circle Rotate Text In JS
        ============================*/
        const circleRotateElm = $(".circle-rotate-text");
        if (circleRotateElm.length) {
            circleRotateElm.each(function () {
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

        // Portfolio Hover
        $('.portfolio-card-main-wrapper').each(function () {
            const item = $(this).find('.portfolio-card, .icon-card-inner');
            const img = $(this).find('.tabimg');
            item.on('mouseenter', function () {
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
                        timer = window.setTimeout(function () {
                            $("#scrollTop").fadeOut();
                        }, 3000);
                    }
                    position = scrollTop;
                } else {
                    $('#scrollTop').fadeOut();
                }
            });
            $(".scrollup-btn").click(function () {
                $("html, body").animate({
                    scrollTop: 0
                }, "slow");
                return false;
            });
        });

        // Share btn click action
        $('.social-btn').on('click', function () {
            $(".share-group").toggleClass("active");
            $(".social-btn-overlay").toggleClass("active");
        });
        $('.social-btn-overlay').on('click', function () {
            $(".share-group").removeClass("active");
            $(".social-btn-overlay").removeClass("active");
        });
        /*
        Window Load
        ============================*/
        $(window).on("load", function () {
            /*
            Preeloader
            ============================*/
            $("#preloader").fadeOut();
            $("#preloader-status").delay(200).fadeOut("slow");
            $("body").delay(200).css({
                "overflow-x": "hidden"
            });

        });

    });
})(jQuery);