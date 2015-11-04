$(document).ready(function() {

	$(document).on('click', '#menu-tab', function () {
		$('#menu-nav').slideToggle('slow');
	});


$(window).scroll(function() {
  if ($(document).scrollTop() > 45) {
    $('.display').addClass('shrink');
  } else {
    $('.display').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 45) {
    $('.nodisplay').addClass('shrink');
  } else {
    $('.nodisplay').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 25) {
    $('.menuscroll').addClass('shrink');
  } else {
    $('.menuscroll').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 25) {
    $('.currentpagetop').addClass('shrink');
  } else {
    $('.currentpagetop').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.box1').addClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 325) {
    $('.box2').addClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 550) {
    $('.box3').addClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 775) {
    $('.box4').addClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 1000) {
    $('.box5').addClass('shrink');
  }
});

	$('#myCarousel').carousel({
		interval: 10000
	})

    $('#myCarousel').on('slid.bs.carousel', function() {
    	//alert("slid");
	});

	$('#myCarousel2').carousel({
	interval: 10000
	})

    $('#myCarousel2').on('slid.bs.carousel', function() {
    	//alert("slid");
	});


	});

	var offset = 220;
var duration = 500;

jQuery(window).scroll(function() {
  if (jQuery(this).scrollTop() > offset) {
    jQuery('.back-to-top').fadeIn(duration);
  } else {
    jQuery('.back-to-top').fadeOut(duration);
  }
});

jQuery('.back-to-top').click(function(event) {
  event.preventDefault();
  jQuery('html, body').animate({
    scrollTop: 0
  }, duration);
  return false;
});
