$(document).ready(function () {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
    $(".navbar-brand").addClass("name-small");
    $(".nav-links").addClass("small-nav-links");
  }
  //jQuery to collapse the navbar on scroll toward bottom of page
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
      $(".navbar-brand").addClass("name-small");
      $(".nav-links").addClass("small-nav-links");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
      $(".navbar-brand").removeClass("name-small");
      $(".nav-links").removeClass("small-nav-links");
    }
  });

  //jQuery for nav link -> scrolling feature - requires jQuery Easing plugin
  $(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 50
      }, 1250, 'easeInOutExpo');
      event.preventDefault();
      setTimeout(function(){
        $("#links").removeClass("in");
      }, 1300);
    });
  });


  // jQuery to 'highlight' proper link in navbar based on page position
  $(window).on("scroll", function() {
    var currentPos = $(window).scrollTop();

    $('.nav li a').each(function() {
      var sectionLink = $(this);
      // capture the height of the navbar
      var navHeight = $('#mainNav').outerHeight() + 1;
      var dropDownHeight = $('.in').outerHeight();
      var section = $(sectionLink.attr('href'));

      // subtract the navbar height from the top of the section
      if ($(window).width() >= 767) {
        if(section.position().top - navHeight <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
          $('.nav li').removeClass('active');
          sectionLink.parent().addClass('active');
        } else {
          sectionLink.parent().removeClass('active');
        }
      } else {
        if(section.position().top - navHeight + dropDownHeight <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
          $('.nav li').removeClass('active');
          sectionLink.parent().addClass('active');
        } else {
          sectionLink.parent().removeClass('active');
        }
      }
    });
  });
  
  // jquery to remove focus on navbar-brand after click
  $(".navbar-brand").mouseup(function(){
    $(this).blur();
  });

})
