$(document).ready(function(){
    $('.logos').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    infinite: false,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: false,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });

    // $('.team-logos').slick({
    //     centerMode: true,
    //     centerPadding: '10px',
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //   	arrows: true,
    //     prevArrow: '<div class="slider-arrow slider-prev fas fa-long-arrow-alt-left"></div>',
    //     nextArrow: '<div class="slider-arrow slider-next fas fa-long-arrow-alt-right"></div>',
    //     infinite: true,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           arrows: false,
    //           centerMode: true,
    //           centerPadding: '40px',
    //           slidesToShow: 1
    //         }
    //       }
    //     ]
    //   });
});
