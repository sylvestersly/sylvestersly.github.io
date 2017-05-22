$(document).ready(function() {
     /*-----------------------------------------------------------------------------------*/
    /*  slideshow decision 
    /*----------------------------------------------------------------------------------*/
//current position
var pos = 0;
//number of slides
var totalSlides = $('#slider-wrap ul li').length;
//get the slide width
var sliderWidth = $('#slider-wrap').width();


$(document).ready(function(){
    
    //set width to be 'x' times the number of slides
    $('#slider-wrap ul#slider').width(sliderWidth*totalSlides);
    
    //next slide    
    $('#next').click(function(){
        slideRight();
    });
    
    //previous slide
    $('#previous').click(function(){
        slideLeft();
    });
    

    //automatic slider
    var autoSlider = setInterval(slideRight, 3000);
    
    //for each slide 
    $.each($('#slider-wrap ul li'), function() { 
       //set its color
       var c = $(this).attr("data-color");
       $(this).css("background",c);
       
       //create a pagination
       var li = document.createElement('li');
       $('#pagination-wrap ul').append(li);    
    });

    //hide/show controls/btns when hover
    //pause automatic slide when hover
    $('#slider-wrap').hover(
      function(){ $(this).addClass('active'); clearInterval(autoSlider); }, 
      function(){ $(this).removeClass('active'); autoSlider = setInterval(slideRight, 3000); }
    );

});//DOCUMENT READY
    
/***********
 SLIDE LEFT
************/
function slideLeft(){
    pos--;
    if(pos==-1){ pos = totalSlides-1; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos));    
    
    //*> optional
    countSlides();
}

/************
 SLIDE RIGHT
*************/
function slideRight(){
    pos++;
    if(pos==totalSlides){ pos = 0; }
    $('#slider-wrap ul#slider').css('left', -(sliderWidth*pos)); 
    
    countSlides();
}

/*-----------------------------------------------------------------------------------*/
/*  LOADING *Links to Css*
/*-----------------------------------------------------------------------------------*/
$(window).load(function() {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
    $('#preloader .textload').delay(0).fadeOut('slow');
    $('body').delay(350).css({
        'overflow': 'visible'
    });
});

/***********************************************************************
*    Title: <Revolution Slider>
*    Author: <Themepuch >
*    Date: <Last Update of Tools 17.11.2014>
*    Code version: <1.0>
*    Availability: <https://revolution.themepunch.com/>
*
***********************************************************************/
    /*-----------------------------------------------------------------------------------*/
    /*	REVOLUTION *Followed a set of instructions to get this plugin to work*
	/*-----------------------------------------------------------------------------------*/
    //External plugin for the slider
    $('.tp-fullscreen').revolution({
        delay: 9000,
        startwidth: 1170,
        startheight: 750,
        hideThumbs: 0,
        hideArrowsOnMobile: "on",
        fullWidth: "on",
        fullScreen: "on",
        soloArrowLeftHOffset: 0,
        soloArrowRightHOffset: 0,
        fullScreenOffsetContainer: ""
    });
    /*-----------------------------------------------------------------------------------*/
    /*	sCROLL TO TOP
    /*-----------------------------------------------------------------------------------*/

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

});

