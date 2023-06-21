
$(window).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
         $(".navbar").addClass("sticky");
      }else{
        $(".navbar").removeClass("sticky");
      }
  });
  // Starting Toggel Menu Navbar 
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });
  // Owl Carousel Script
  $('.carousal').owlCarousel({
     margin: 20,
     loop: true,
     autoplayTimeOut: 2000,
     autoplayHoverPause: true,
     responsive: {
        0:{
           items: 1,
           nav: false
        },
        600:{
          items: 2,
           nav: false
        },
        1000:{
          items: 3,
           nav: false
        }
     }
  });
  // Smooth Scrool Win Clicked Ancour Link
  $(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 500);
});
});
                 