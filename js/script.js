$(document).ready(function(){
	$('.header_burger').click(function(event){
		$('.header_burger,.header_menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(window).scroll(function(){
    if ( $(this).scrollTop() > 1 ) {
      $('.header').addClass('affix');
    } else {
      $('.header').removeClass('affix');
    }
    });
	
	});
$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:1,
		autoplay:true,
		speed:1000,
		autoplaySpeed:2500,
		
	});
});

