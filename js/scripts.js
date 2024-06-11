// Hamburger menu
$(document).ready(function(){
	const currentYear = new Date().getFullYear();
	$('.header-2-0 .hamburger-menu').click(function(){
		$(this).toggleClass('open');
	});
	$('footer .footer-wrapper-bottom span').text(currentYear);
});                                                                         