$(function() {
       
	$('#notification').toggle();
   
	$(window).scroll(function() {
		if($(this).scrollTop() > 950) {
			$('#notification').fadeIn();
		}
		else {
			$('#notification').fadeOut();
		}
	}); 
});