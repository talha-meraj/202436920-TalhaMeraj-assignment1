document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize the dynamic time-based greeting
    displayGreeting();

    // 2. Initialize the contact form event listener
    setupContactForm();
});

function getGreetingMessage(currentDate) {
    var hour = currentDate.getHours();
    var greeting = "Welcome!";

    if (hour >= 5 && hour < 12) {
        greeting = "Good Morning ☀️";
    } else if (hour >= 12 && hour < 17) {
        greeting = "Good Afternoon 🌤️";
    } else if (hour >= 17 && hour < 22) {
        greeting = "Good Evening 🌙";
    } else {
        greeting = "Hello, Night Owl 🦉";
    }

    return greeting;
}

function displayGreeting() {
    var greetingElement = document.getElementById("timeGreeting");
    if (greetingElement !== null) {
        var now = new Date();
        greetingElement.textContent = getGreetingMessage(now);
    }
}

/* contact form validation */
function setupContactForm() {
    var contactForm = document.getElementById("contactForm");
    var formFeedback = document.getElementById("formFeedback");

    if (!contactForm || !formFeedback) return;

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop default HTTP page refresh

        var nameField = document.getElementById("name");
        var emailField = document.getElementById("email");
        var messageField = document.getElementById("message");

        var nameValue = nameField ? nameField.value.trim() : "";
        var emailValue = emailField ? emailField.value.trim() : "";
        var messageValue = messageField ? messageField.value.trim() : "";

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate inputs
        if (nameValue === "") {
            showFeedback(formFeedback, "Please enter your name.", "error");
            if (nameField) nameField.focus();
            return;
        }

        if (emailValue === "" || !emailRegex.test(emailValue)) {
            showFeedback(formFeedback, "Please enter a valid email address.", "error");
            if (emailField) emailField.focus();
            return;
        }

        if (messageValue === "") {
            showFeedback(formFeedback, "Please enter a message before sending.", "error");
            if (messageField) messageField.focus();
            return;
        }

        // Success state
        showFeedback(formFeedback, "Thank you, " + nameValue + "! Your message has been received.", "success");
        contactForm.reset();

        setTimeout(function () {
            formFeedback.className = "form-feedback";
            formFeedback.textContent = "";
        }, 5000);
    });
}

function showFeedback(element, text, type) {
    element.className = "form-feedback " + type;
    element.textContent = text;
}