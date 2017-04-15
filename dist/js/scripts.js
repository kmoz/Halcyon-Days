

//Scroll animations
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});

//counter
$('.count').counterUp({
  delay: 10,
  time: 1000
});

//AOS
AOS.init({
      offset: 200,
      duration: 300,
      easing: 'ease-in-sine',
      delay: 100,
    });
