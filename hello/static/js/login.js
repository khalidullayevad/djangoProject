document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    const loginForm = document.querySelector("form");

    loginForm.addEventListener("submit", function(event) {
        // Prevent default form submission
        event.preventDefault();

        const emailOrPhone = document.querySelector('input[placeholder="Email или телефон"]').value;
        const password = document.querySelector('input[placeholder="Пароль"]').value;

        if(emailOrPhone && password) {
            alert("Submitting form with email/phone: " + emailOrPhone);
        } else {
            alert("Please fill out all fields.");
        }
    });

    // Toggle password visibility
    const togglePasswordBtn = document.querySelector('.toggle-password');
    togglePasswordBtn.addEventListener('click', function() {
        const passwordInput = document.querySelector('input[placeholder="Пароль"]');
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            togglePasswordBtn.innerHTML = "🙈"; // Eye closed
        } else {
            passwordInput.type = "password";
            togglePasswordBtn.innerHTML = "👁"; // Eye open
        }
    });
});
