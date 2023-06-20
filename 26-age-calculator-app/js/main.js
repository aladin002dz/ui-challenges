main();
function main() {
    const formCalculateAge = document.getElementById("age-form");
    formCalculateAge.addEventListener("submit", calculateAge);
    function calculateAge(e) {
        e.preventDefault();

        // Get the age display elements
        yearsCounter = document.getElementById("years-counter");
        monthsCounter = document.getElementById("months-counter");
        daysCounter = document.getElementById("days-counter");

        // Clear the age display
        yearsCounter.textContent = "--";
        monthsCounter.textContent = "--";
        daysCounter.textContent = "--";

        // Validate the form inputs
        if (!validateForm()) {
            return;
        }

        // Get the birth date and today's date
        const yearInput = document.getElementById("year-of-birth").value;
        const monthInput = document.getElementById("month-of-birth").value;
        const dayInput = document.getElementById("day-of-birth").value;

        // Calculate the age in milliseconds
        const birthDate = new Date(yearInput, monthInput - 1, dayInput);
        const today = new Date();
        const ageInMilliseconds = today - birthDate;

        // Convert age from milliseconds to years, months, and days
        const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
        const ageInMonths = (ageInYears - Math.floor(ageInYears)) * 12;
        const ageInDays = Math.floor((ageInMonths - Math.floor(ageInMonths)) * 30);

        // Display the age in years, months, and days
        yearsCounter.textContent = Math.floor(ageInYears);
        monthsCounter.textContent = Math.floor(ageInMonths);
        daysCounter.textContent = ageInDays;
    }
}

function validateForm() {
    // set initial result to true
    let result = true;

    // get the user input
    const yearInput = document.getElementById("year-of-birth");
    const monthInput = document.getElementById("month-of-birth");
    const dayInput = document.getElementById("day-of-birth");
    const year = yearInput.value;
    const month = monthInput.value;
    const day = dayInput.value;

    //Regex patterns for year, month, and day
    var yearPattern = /^[1-9]\d*$/;
    var monthPattern = /^(0?[1-9]|1[0-2])$/;
    var dayPattern = /^(0?[1-9]|[1-2]\d|3[0-1])$/;

    // validate the year input
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    if (!yearPattern.test(year) || year > currentYear) {
        displayError(yearInput);
        result = false;
    } else {
        removeDisplayedError(yearInput);
    }

    // validate the month input
    if (!monthPattern.test(month)) {
        displayError(monthInput);
        result = false;
    } else {
        removeDisplayedError(monthInput);
    }

    // validate the day input
    if (!dayPattern.test(day)) {
        displayError(dayInput);
        result = false;
    } else {
        removeDisplayedError(dayInput);
    }

    // return the result
    return result;
}

function displayError(element) {
    const parent = element.closest('.input-group');
    parent.classList.add('error');
}

function removeDisplayedError(element) {
    const parent = element.closest('.input-group');
    parent.classList.remove('error');
}
