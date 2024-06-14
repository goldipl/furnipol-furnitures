// Hamburger menu
$(document).ready(function(){
	$('.header-2-0 .hamburger-menu').click(function(){
		$(this).toggleClass('open');
	});
});  

// Footer year
$(document).ready(function(){
	const currentYear = new Date().getFullYear();
	$('footer .footer-wrapper-bottom span').text(currentYear);
});  

// Toggling show more telephones on desktop
$(document).ready(function() {
	$(".contact-slot__show-more").click(function() {
		var hiddenElements = $(this).closest(".contact-slot.phones").find(".contact-slot-line.phone");
		hiddenElements.toggleClass("hidden");

		$(".contact-slot__show-more span").each(function() {
			var showMoreText = $(this).text().trim().includes("więcej") ? "Pokaż mniej" : "Pokaż więcej";
			$(this).text(showMoreText);
		});
		
		$(this).find(".arrow-down-show").toggleClass("rotated");
	});
});