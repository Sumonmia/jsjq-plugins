
// js

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       10,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

//   AOS

AOS.init({
    offset: 120, 
    delay: 50,
    duration: 1000, 
    easing: 'linear'
});

// jquery plugins

$(document).ready(function(){
    // counter up
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // curved text
   var arc = function (t)
   {
       return {
           x: 500.0 + 300.0 * Math.cos(2.0 * Math.PI * t - 0.5 * Math.PI),
           y: 400.0 + 300.0 * Math.sin(2.0 * Math.PI * t - 0.5 * Math.PI)
       };
   };

   $('#text1').curvedText({
       curve:    arc,
       domain:   [-0.2, 0.2],
       viewport: { x: 0.0, y: 0.0, width: 1000.0, height: 400.0 }
   });

//    slick slider
        $('.slide').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            // slidesToScroll: 2,
            speed: 800,
            dots: true,  
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    centerMode: true,
                    centerPadding: '60px',
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    // dots: true
                  }
                },
                // {
                //   breakpoint: 767,
                //   settings: {
                //     slidesToShow: 1,
                //     slidesToScroll: 1
                //   }
                // },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
              ]
        });


        // mixit up
        var mixer = mixitup('#hello', {
            animation: {
                duration: 300
            }
        });
})