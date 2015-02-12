$(document).ready(function(){


		$(window).load(function(event){
		$('#photo').addClass('animation');
		$('#tag').addClass('animation');
		$('#creative').addClass('animation');
		
		$('#creative-name').addClass('animation');
		$('#skill-list').addClass('animation');
		$('#creative-description').addClass('animation');
		$('#header-contact').addClass('animation');
	});	

	$(document).on( 'scroll', function(){ 
        if ($(window).scrollTop() > 50) {
            $('#scroll-top').addClass('show');
        } else {
            $('#scroll-top').removeClass('show');
        }
    });
		

	$(window).scroll(function(event){		
		var y = $(this).scrollTop();
		if( y >= 280 ){
			$('#experience-subtitle').addClass('animation');
			$('#exp-study').addClass('animation');
			$('#exp-job').addClass('animation');
		}
		
		if( y >= 900){
			$('#portfolio-title').addClass('animation');
			$('#portfolio-subtitle').addClass('animation');
			$('#filter-wrapper').addClass('animation');
			$('#portfolio-items').addClass('animation');
		};
		if( y >= 1900){
			$('#contact-title').addClass('animation');
			$('#contact-subtitle').addClass('animation');
			$('#form-input').addClass('animation');
			$('#form-textarea').addClass('animation');
			$('#form-button').addClass('animation');
		}
	});

	$(window).bind('scroll',function(e){
		parallax();
	});	

	$('body').scrollspy({ target: '.navbar-collapse' });

	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});


function parallax(){
	var scrollPosition = $(window).scrollTop();
	$('.background-parallax').css('top', (0 - (scrollPosition * .5))+'px');
}

