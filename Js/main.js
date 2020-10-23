const responsive={
  0:{
    items:1
  },
  320:{
    items:1
  },
  560:{
    items:2
  },
  960:{
    items:3
  }
}
$(document).ready(function (){
  $nav =$('.nav');
  $toggleCollapse = $('.toggle-collapse');
 
 /*click event on toggle menu */
  $toggleCollapse.click(function (){
     $nav.toggleClass('collapse');
 })
  //owl-carosel
  $('.owl-carousel').owlCarousel({
      loop: true,
      autoplay:true,
      autoplayTimeOut:300,
      dots:false,
      nav:true,
      navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
      responsive:responsive
    });
//click to scrool top
$('.move-up span').click(function (){
  $('html,body').animate({
    scrollTop:0
  },
  1000
  )
});

AOS.init();
});