main();
function main() {
    const singupSection = document.querySelector('#signup-section');
    const successSection = document.querySelector('#success-section');
    const emailInput = document.querySelector('#email');
    const errorMessage = document.querySelector('#error-message');
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!validateEmail()) {
            return;
        }
        emailInput.value = "";
        singupSection.classList.toggle('hidden');
        successSection.classList.toggle('hidden');
    });

    emailInput.addEventListener('input', function () {
        errorMessage.textContent = "";
        emailInput.classList.remove("error");
    });


    const dismissBtn = document.querySelector('#dismiss-btn');
    dismissBtn.addEventListener('click', function () {
        successSection.classList.toggle('hidden');
        singupSection.classList.toggle('hidden');
    });
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var errorMessage = document.getElementById("error-message");
    if (!emailPattern.test(emailInput.value)) {
        errorMessage.textContent = "Valid email required";
        emailInput.classList.add("error");
        return false; // Prevent form submission
    }
    errorMessage.textContent = "";
    emailInput.classList.remove("error");
    return true; // Allow form submission
}