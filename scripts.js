// "use strict"






/* FADE IN EFFECT ON ELEMENTS UNDER HOMEPAGE MOODBOARD */ 


$(document).ready(function() {
    
  /* Every time the window is scrolled ... */
  $(window).scroll( function(){
  
      /* Check the location of each desired element */
      $('.hide_me').each( function(i){
          
          var bottom_of_object = $(this).offset().top + $(this).outerHeight();
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          
          /* If the object is completely visible in the window, fade it in*/
          if( bottom_of_window > bottom_of_object ){
              
              $(this).animate({'opacity':'1'},800);
                  
          }
          
      }); 
  
  });
  
});







/* logo effect */ 

$(document).ready(function() {
  $(document).scroll(function() {
        if ($(document).scrollTop() >= 100) {
          $('.logo1').addClass('js-scrolling');
        } else {
          $('.logo1').removeClass('js-scrolling');
        }
  });
});

// $(document).ready(function() {
//   $(document).scroll(function() {
//         if ($(document).scrollTop() >= 100) {
//           $('.logo_star').addClass('js-scrolling');
//         } else {
//           $('.logo_star').removeClass('js-scrolling');
//         }
//   });
// });


//  shadowing effect on bottom edge of header during scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("header").addClass("active");
    $('header').addClass('small');

  } else {
    $("header").removeClass("active");
    $('header').removeClass('small');
  }
});



// back to top bird effect
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $("#scroll").css("right", "10px");
    } else {
      $("#scroll").css("right", "-140px");
    }
  });
  $("#scroll").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  });
});





/* Animating Good Fit Divs on Homepage */

$(function () { // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.good_fit_hide_me').each(function (i) {

      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 1500);

      }

    });

  });

});



/* Set Date in input box on contact page */ 

document.querySelector("#today").valueAsDate = new Date();



/* Fun Facts Slideshow */

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
















