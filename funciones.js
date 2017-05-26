var scroll_D = 0;

function menuPosition(){

    scroll_D = $('section').offset().top - $(window).scrollTop();

    if(scroll_D < 0){
	
		$('nav').removeClass('navStatic');
		$('nav').addClass('navFixed');
		
		$('aside').removeClass('asideStatic');
		$('aside').addClass('asideFixed');
		
	}else{
	
		$('nav').addClass('navStatic');
		$('nav').removeClass('navFixed');
		
		$('aside').addClass('asideStatic');
		$('aside').removeClass('asideFixed');
		
	}

}

$(document).ready(menuPosition);
$(window).scroll(menuPosition);

