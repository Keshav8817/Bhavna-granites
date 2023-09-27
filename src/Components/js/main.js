/* eslint no-undef: "off"*/

import React from "react";
import $ from 'jquery'; 


const Main=()=>{
    return(

       $ (function () {   

    // Inline Popup

    if ($.fn.magnificPopup !== undefined) {
        $('.inline-popup').magnificPopup({
            type: 'inline',
            midClick: true,
            removalDelay: 300,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true, // set to true to enable gallery
                preload: [0, 2], // read about this option in next Lazy-loading section
                navigateByImgClick: true,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
                tPrev: 'Previous (Left arrow key)', // title for left button
                tNext: 'Next (Right arrow key)', // title for right button
                tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
            }
        });
    }


   
        
        })
    


    )
};
export default Main; 