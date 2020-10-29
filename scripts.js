// "use strict"


/* FADE IN EFFECT ON ELEMENTS UNDER HOMEPAGE MOODBOARD */

$(document).ready(function () {

  /* Every time the window is scrolled ... */
  $(window).scroll(function () {

    /* Check the location of each desired element */
    $('.hide_me').each(function (i) {

      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* If the object is completely visible in the window, fade it in*/
      if (bottom_of_window > bottom_of_object) {

        $(this).animate({
          'opacity': '1'
        }, 800);

      }

    });

  });

});



// When the user scrolls down 100px from the top of the document, resize the navbar's padding 

window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("main_menu").style.padding = "0px";
    document.getElementById("logo_Claire2").style.width = "120px";
    // document.getElementById("logo_Claire").style.marginTop = "0px";
  } else {
    document.getElementById("main_menu").style.padding = "60px 0px";
    document.getElementById("logo_Claire2").style.width = "180px";
    // document.getElementById("logo_Claire").style.marginTop = "0px";
  }
  
}




//  shadowing effect on bottom edge of header during scroll
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $("#main_menu").addClass("active");
    $('#main_menu').addClass('small');

  } else {
    $("#main_menu").removeClass("active");
    $('#main_menu').removeClass('small');
  }
});





// back to top icon effect
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