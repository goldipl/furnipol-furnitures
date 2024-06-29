// Hamburger menu
$(document).ready(function(){
    $('.header-2-0 .hamburger-menu').click(function(){
        $(this).toggleClass('open');
        $('.header-2-0 .mobile-menu').addClass('active');
        $('body').addClass('body-locked');
        $('html').addClass('body-locked');
    });
});

// Footer year
$(document).ready(function(){
	const currentYear = new Date().getFullYear();
	$('footer .footer-wrapper-bottom span').text(currentYear);
});  

// Toggling show more telephones in footer
$(document).ready(function() {
	$(".contact-slot__show-more").click(function() {
		const hiddenElements = $(this).closest(".contact-slot.phones").find(".contact-slot-line.phone");
		hiddenElements.toggleClass("hidden");

		$(".contact-slot__show-more span").each(function() {
			const showMoreText = $(this).text().trim().includes("więcej") ? "Pokaż mniej" : "Pokaż więcej";
			$(this).text(showMoreText);
		});
		
		$(this).find(".arrow-down-show").toggleClass("rotated");
	});
});

// Toggling show more text btn
document.addEventListener("DOMContentLoaded", () => {
	const toggleButton = document.querySelector(".toggle-text-button span");
	const toggleButtonArrow = document.querySelector(".toggle-text-button svg");
	const welcomeText = document.querySelector(".welcome-text");

	toggleButton.addEventListener("click", () => {
		welcomeText.classList.toggle("expanded");
		toggleButtonArrow.classList.toggle("rotated");
		toggleButton.textContent = welcomeText.classList.contains("expanded") ? "Pokaż mniej" : "Pokaż więcej";
	});
});

// Toggling show more fav categories btn
document.addEventListener("DOMContentLoaded", () => {
	const toggleFavButton = document.querySelector(".toggle-favourite-categories-button span");
	const toggleFavButtonArrow = document.querySelector(".toggle-favourite-categories-button svg");
	const favCategoriesBox = document.querySelector(".favourite-categories");

	toggleFavButton.addEventListener("click", () => {
		favCategoriesBox.classList.toggle("expanded");
		toggleFavButtonArrow.classList.toggle("rotated");
		toggleFavButton.textContent = favCategoriesBox.classList.contains("expanded") ? "Pokaż mniej" : "Pokaż więcej";
	});
});

// Toggling mobile footer contact buttons
document.addEventListener("DOMContentLoaded", () => {
    const footerContactBtns = document.querySelectorAll(".footer-2-0 .footer-wrapper-top-col .footer-col-wrapper__title");

    footerContactBtns.forEach((element) => {
        element.addEventListener('click', () => {
            const nextSibling = element.nextElementSibling;
            nextSibling.classList.toggle('active');
            const arrowIcon = element.querySelector(".footer-arrow-icon");
            if (arrowIcon) {
                arrowIcon.classList.toggle('rotated');
            }
        });
    });
});

// Fixed bottom header
document.addEventListener("DOMContentLoaded", () => {
    const bottomHeader = document.querySelector('.header-2-0 .bottom-header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        if (scrollTop < lastScrollTop) {
            // Scrolling up
            bottomHeader.classList.add('fixed');
        } else {
            // Scrolling down
            bottomHeader.classList.remove('fixed');
        }

        lastScrollTop = scrollTop;
    });
});
