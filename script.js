// Wait for the entire page content to load before running the script
document.addEventListener("DOMContentLoaded", function() {

    
    // --- FAQ Accordion Script ---
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");
        const icon = item.querySelector(".faq-icon");

        question.addEventListener("click", () => {
            // Check if the item is already active
            const isActive = item.classList.contains("active");

            // Close all other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                otherItem.querySelector(".faq-icon").textContent = "+";
            });

            if (isActive) {
                // Close the item
                item.classList.remove("active");
                icon.textContent = "+";
            } else {
                // Open the item
                item.classList.add("active");
                icon.textContent = "-";
            }
        });
    });



});