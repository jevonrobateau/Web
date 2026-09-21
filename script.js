// =========================================
// Website JavaScript
// =========================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // Active Navigation
    // =========================================

    const navigationLinks = document.querySelectorAll(".navigation a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigationLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    // =========================================
    // Button Effects
    // =========================================

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(function () {
                button.style.transform = "";
            }, 150);

        });

    });


    // =========================================
    // Service Card Effects
    // =========================================

    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.style.cursor = "pointer";
        });

        card.addEventListener("mouseleave", function () {
            this.style.cursor = "default";
        });

    });


    // =========================================
    // Contact Form
    // =========================================

    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {

                if (formMessage) {
                    formMessage.textContent =
                        "Please fill in all fields.";
                }

                return;
            }

            if (formMessage) {
                formMessage.textContent =
                    "Thank you, " + name +
                    ". Your message has been received.";
            }

            contactForm.reset();

        });

    }


    // =========================================
    // Profile Page
    // =========================================

    const transcriptLink = document.getElementById("transcriptLink");

    if (transcriptLink) {

        transcriptLink.addEventListener("click", function () {

            console.log("Transcript page opened.");

        });

    }


    // =========================================
    // Gallery Images
    // =========================================

    const galleryImages = document.querySelectorAll(".gallery-grid img");

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (this.style.transform === "scale(1.05)") {
                this.style.transform = "scale(1)";
            } else {
                this.style.transform = "scale(1.05)";
            }

        });

    });


    // =========================================
    // Page Load Message
    // =========================================

    console.log("Jevon Robateau website loaded successfully.");

});