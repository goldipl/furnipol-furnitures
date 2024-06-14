// Hamburger menu
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.querySelector('.header-2-0 .hamburger-menu').addEventListener('click', function() {
        this.classList.toggle('open');
    });

    document.querySelector('footer .footer-wrapper-bottom span').textContent = currentYear;
});

// Toggling show more telephones on desktop
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".contact-slot__show-more").forEach(button => {
        button.addEventListener('click', () => {
            const hiddenElements = button.closest(".contact-slot.phones").querySelectorAll(".contact-slot-line.phone");
            hiddenElements.forEach(element => element.classList.toggle("hidden"));

            document.querySelectorAll(".contact-slot__show-more span").forEach(span => {
                const showMoreText = span.textContent.trim().includes("więcej") ? "Pokaż mniej" : "Pokaż więcej";
                span.textContent = showMoreText;
            });

            button.querySelector(".arrow-down-show").classList.toggle("rotated");
        });
    });
});
