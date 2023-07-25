main();
function main() {
    const singupSection = document.querySelector('#signup-section');
    const successSection = document.querySelector('#success-section');
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateEmail()) {
            return;
        }

        singupSection.classList.toggle('hidden');
        successSection.classList.toggle('hidden');
    });

    const dismissBtn = document.querySelector('#dismiss-btn');
    dismissBtn.addEventListener('click', function () {
        successSection.classList.toggle('hidden');
        singupSection.classList.toggle('hidden');
    });
}

function validateEmail() {
    var emailInput = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput)) {
        var errorMessage = document.getElementById("error-message");
        errorMessage.textContent = "Valid email required";

        emailInput.classList.add("error");
        return false; // Prevent form submission
    }
    emailInput.classList.remove("error");
    return true; // Allow form submission
}