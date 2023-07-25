main();
function main() {
    const singupSection = document.querySelector('#signup-section');
    const successSection = document.querySelector('#success-section');
    const signupForm = document.querySelector('#signup-form');
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        singupSection.classList.toggle('hidden');
        successSection.classList.toggle('hidden');
    });

    const dismissBtn = document.querySelector('#dismiss-btn');
    dismissBtn.addEventListener('click', function () {
        successSection.classList.toggle('hidden');
        singupSection.classList.toggle('hidden');
    });
}