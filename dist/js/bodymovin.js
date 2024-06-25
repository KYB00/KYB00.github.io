var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: 'data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true, // Optional
    name: 'Hello World', // Name for future reference. Optional.
});

$(document).ready(function () {
    // $('#fullpage').fullpage({
    //     // autoScrolling: true,
    //     // scrollHorizontally: true,
    //     navigation: true,
    //     showActiveTooltip: true,
    //     navigationTooltips: ['INTRO', 'ABOUT ME', 'PORTFOLIO', 'MORE INFO'],
    //     anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixPage'],
    //     afterLoad: function (anchorLink, index) {
    //         if (index == 1) {
    //             $('.home-wrap').css({
    //                 width: '450px',
    //                 height: '450px',
    //             });
    //             $('.home-wrap').animate(
    //                 {
    //                     opacity: 1,
    //                 },
    //                 100
    //             );
    //             $('.arrow').css({
    //                 opacity: 1,
    //             });
    //         }
    //     },
    //     onLeave: function (index, nextIndex, direction) {
    //         if (index == 1 && direction == 'down') {
    //             $('.home-wrap').css({
    //                 width: '4000px',
    //                 height: '2000px',
    //             });
    //             $('.arrow').css({
    //                 opacity: 0,
    //             });
    //         }
    //         // if (nextIndex >= 3) {
    //         //     $('#header').animate(
    //         //         {
    //         //             opacity: 1,
    //         //         },
    //         //         500
    //         //     );
    //         // } else {
    //         //     $('#header').animate({
    //         //         opacity: 0,
    //         //     });
    //         // }
    //     }
    // });

    
});
