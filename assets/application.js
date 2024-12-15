// Put your application javascript here
$(window).scroll(function() {
    if ($(this).scrollTop() > 40) {
      $('#shopify-section-header').addClass('backdrop');
    } else {
      $('#shopify-section-header').removeClass('backdrop');
    }
  });