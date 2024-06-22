document.addEventListener("DOMContentLoaded", function() {
    // Dynamic greeting based on time of day
    function getGreeting() {
        const now = new Date();
        const hour = now.getHours();
        if (hour < 12) {
            return "Good Morning!";
        } else if (hour < 18) {
            return "Good Afternoon!";
        } else {
            return "Good Evening!";
        }
    }

    const greetingElement = document.getElementById("greeting");
    greetingElement.textContent = getGreeting();

    // Toggle additional details in "About Me" section
    const moreDetailsButton = document.getElementById("more-details-button");
    const additionalDetails = document.getElementById("additional-details");

    moreDetailsButton.addEventListener("click", function() {
        if (additionalDetails.style.display === "none") {
            additionalDetails.style.display = "block";
            moreDetailsButton.textContent = "Hide Details";
        } else {
            additionalDetails.style.display = "none";
            moreDetailsButton.textContent = "More Details";
        }
    });

    // Handle form submission
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Thank you for your message!");
        contactForm.reset();
    });
});
