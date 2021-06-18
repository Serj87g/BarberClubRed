
$(document).ready(() => {

                                    //КАРУСЕЛЬ
    $('.slick-masters-container').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        speed: 800,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });


    //КАРУСЕЛЬ
    $('.instagram-slick').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        speed: 800,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


                                            //burger
    $('#burger').click(() => {
        $('#menu, #header-close, a').toggleClass('menu-active');
    })
    $('#header-close, #menu').click(() => {
        $('#menu, #header-close, a').toggleClass('menu-active');
    })


                                            //popup call
    // $('.phone-button').click(() => {
    //     $('#popup-call').show(1000);
    // });
    // $('.close').click(() => {
    //     $('#popup-call').hide(1000);
    // });

    // $('.phone-button').click(() => {
    //     $('#popup-call').slideDown(1000);
    // });
    // $('.close').click(() => {
    //     $('#popup-call').slideUp(1000);
    // });

    $('.phone-button').click(() => {
        $('#popup-call').fadeIn(1000);
    });
    $('.close').click(() => {
        $('#popup-call').fadeOut(1000);
    });

                                            //popup form
    $($('.solid-button')[0]).click(() => {
        $('#popup-form').show(1000);
    });
    $($('.solid-button')[1]).click(() => {
        $('#popup-form').show(1000);
    });
    $('.slick-button').click(() => {
        $('#popup-form').show(1000);
    })
    $('.form-close').click(() => {
        $('#popup-form').hide(1000);
    });

                                            //popup thanks
    $($('.solid-button')[8]).click(() => {
        $('#popup-thanks').show(1000);
        $('#popup-form').hide(1000);
    });
    $($('.form-close')[2]).click(() => {
        $('#popup-thanks').hide(1000);
    });

                                            //popup discount
    $($('.solid-button')[5]).click(() => {
        $('#popup-discount').show(1000);
    });
    $('.form-close').click(() => {
        $('#popup-discount').hide(1000);
    });

                                            //price
    $('#haircuts').click(() => {
        $('#haircuts-container').slideDown(1000);
        $('#shaving-container').slideUp(1000);
        $('#comprehensive-container').slideUp(1000);
        $('#additional-container').slideUp(1000);
        console.log('стрижка');
    });
    $('#shaving').click(() => {
        $('#haircuts-container').slideUp(1000);
        $('#shaving-container').slideDown(1000);
        $('#comprehensive-container').slideUp(1000);
        $('#additional-container').slideUp(1000);
        console.log('бритьё');
    });
    $('#comprehensive').click(() => {
        $('#haircuts-container').slideUp(1000);
        $('#shaving-container').slideUp(1000);
        $('#comprehensive-container').slideDown(1000);
        $('#additional-container').slideUp(1000);
        console.log('комплексные услуги');
    });
    $('#additional').click(() => {
        $('#haircuts-container').slideUp(1000);
        $('#shaving-container').slideUp(1000);
        $('#comprehensive-container').slideUp(1000);
        $('#additional-container').slideDown(1000);
        console.log('дополнительные услуги');
    });

    $(".category").click(function () {
        $("this").addClass("active").siblings().removeClass("active");
        $('.category').siblings().removeClass("active");
    });



                                            //wow animate
    new WOW().init();


});