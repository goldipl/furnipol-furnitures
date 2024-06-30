// Hamburger menu
$(document).ready(function(){
    // Hamburger menu click listener for opening the menu
    $('.header-2-0 .hamburger-menu').click(function(){
        $(this).toggleClass('open');
        $('.mobile-menu-img-wrapper').removeClass('active');
        $('.menu-inner-second-lvl').removeClass('active');
        $('.menu-inner-third-lvl-content').removeClass('active');
        $('.header-2-0 .mobile-menu').addClass('active');
        $('body').addClass('body-locked');
        $('html').addClass('body-locked');
    });

    // Close icon click listener for closing the menu
    const closeIcons = document.querySelectorAll('.header-2-0 .mobile-menu-wrapper .close-icon');
    const mobileMenu = document.querySelector('.header-2-0 .mobile-menu');

    closeIcons.forEach(item => {
        item.addEventListener('click', () => {
            closeMenu();
            removingActiveClassesFromMenu();
        });
    });

    // Document click listener for closing the menu when clicking outside of it
    document.addEventListener('click', (event) => {
        if (window.innerWidth >= 1220) {
            if (!mobileMenu.contains(event.target) && !event.target.closest('.hamburger-menu') && mobileMenu.classList.contains('active')) {
                closeMenu();
                removingActiveClassesFromMenu();
            }
        }
    });
    
    // Remove 'active' class from all elements with the specified classe
    function removingActiveClassesFromMenu() {
        $('.mobile-menu-img-wrapper').removeClass('active');
        $('.menu-inner-third-lvl-content').removeClass('active');
        $('.menu-inner-second-lvl').removeClass('active');
    }

    // Function to close the menu
    function closeMenu() {
        $('.header-2-0 .hamburger-menu').removeClass('open');
        mobileMenu.classList.remove('active');
        document.body.classList.remove('body-locked');
        document.getElementsByTagName('html')[0].classList.remove('body-locked');
    }
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

// Select all fav and compare buttons within the sale slider
const favSwiperButtons = document.querySelectorAll('.main-2-0 #sale #sale-slider .swiper-wrapper .swiper-slide__icons .fav-box-icon');
const compareSwiperButtons = document.querySelectorAll('.main-2-0 #sale #sale-slider .swiper-wrapper .swiper-slide__icons .compare-box-icon');

// Function to toggle the active class on the child img element
function toggleActiveClass(event) {
    const imgElement = event.target.querySelector('img');

    // Check if there is an img element inside the clicked button
    if (imgElement) {
        imgElement.classList.toggle('active');
    }
}

// Attach event listeners to fav buttons
favSwiperButtons.forEach(button => {
    button.addEventListener('click', toggleActiveClass);
});

// Attach event listeners to compare buttons
compareSwiperButtons.forEach(button => {
    button.addEventListener('click', toggleActiveClass);
});

