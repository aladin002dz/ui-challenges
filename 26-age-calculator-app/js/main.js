main();
function main() {
    const formCalculateAge = document.getElementById("age-form");
    formCalculateAge.addEventListener("submit", calculateAge);
    function calculateAge(e) {
        e.preventDefault();
        document.getElementById("years-counter").textContent = "--";
        document.getElementById("months-counter").textContent = "--";
        document.getElementById("days-counter").textContent = "--";

        if (!validateForm()) {
            return;
        }

        const birthDate = new Date(document.getElementById("year-of-birth").value, document.getElementById("month-of-birth").value - 1, document.getElementById("day-of-birth").value);
        const today = new Date();
        const ageInMilliseconds = today - birthDate;

        // Convert age from milliseconds to years, months, and days
        const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
        const ageInMonths = (ageInYears - Math.floor(ageInYears)) * 12;
        const ageInDays = Math.floor((ageInMonths - Math.floor(ageInMonths)) * 30);

        // Display the age in years, months, and days
        document.getElementById("years-counter").textContent = Math.floor(ageInYears);
        document.getElementById("months-counter").textContent = Math.floor(ageInMonths);
        document.getElementById("days-counter").textContent = ageInDays;
    }
}

function validateForm() {
    const yearInput = document.getElementById("year-of-birth");
    const monthInput = document.getElementById("month-of-birth");
    const dayInput = document.getElementById("day-of-birth");

    const year = yearInput.value;
    const month = monthInput.value;
    const day = dayInput.value;


    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var yearPattern = /^[1-9]\d*$/;
    var monthPattern = /^(0?[1-9]|1[0-2])$/;
    var dayPattern = /^(0?[1-9]|[1-2]\d|3[0-1])$/;

    let valid = true;

    if (!yearPattern.test(year) || year > currentYear) {
        addInvalidClassToInputGroup(yearInput);
        valid = false;
    } else {
        removeInvalidClassFromInputGroup(yearInput);
    }

    if (!monthPattern.test(month)) {
        addInvalidClassToInputGroup(monthInput);
        valid = false;
    } else {
        removeInvalidClassFromInputGroup(monthInput);
    }

    if (!dayPattern.test(day)) {
        addInvalidClassToInputGroup(dayInput);
        valid = false;
    } else {
        removeInvalidClassFromInputGroup(dayInput);
    }

    return valid;
}

function addInvalidClassToInputGroup(element) {
    const parent = element.closest('.input-group');
    parent.classList.add('error');
}

function removeInvalidClassFromInputGroup(element) {
    const parent = element.closest('.input-group');
    parent.classList.remove('error');
}
