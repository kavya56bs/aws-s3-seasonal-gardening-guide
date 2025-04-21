document.addEventListener("DOMContentLoaded", function() {
    const seasonButtons = document.querySelectorAll(".season-btn");

    // Hover effect on buttons
    seasonButtons.forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "0.3s ease-in-out";
        });

        button.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Fade-in animation for season content
    const seasonContent = document.querySelector(".season-content");
    if (seasonContent) {
        seasonContent.style.opacity = "0";
        seasonContent.style.transform = "translateY(20px)";
        setTimeout(() => {
            seasonContent.style.opacity = "1";
            seasonContent.style.transform = "translateY(0)";
            seasonContent.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        }, 300);
    }
});