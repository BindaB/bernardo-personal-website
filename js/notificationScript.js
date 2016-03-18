$(function() {
       
	$('#notification').toggle().css(
	{
		width: '520px',
		height: '150px',
		position: 'fixed',
		padding: '1em',
		bottom: 0,
		right: 0,
		background: '#e62739'
	});
   
	$(window).scroll(function() {
		if($(this).scrollTop() > 200) {
			$('#notification').fadeIn();
		}
		else {
			$('#notification').fadeOut();
		}
	}); 
});