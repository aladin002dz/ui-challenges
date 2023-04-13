main();
function main() {

    const formCalculateAge = document.getElementById("age-form");
    console.log(formCalculateAge);
    formCalculateAge.addEventListener("submit", calculateAge);
    function calculateAge(e) {
        e.preventDefault();
        console.log("calculateAge() called");
        const birthDate = new Date(document.getElementById("year-of-birth").value, document.getElementById("month-of-birth").value - 1, document.getElementById("day-of-birth").value);
        const today = new Date();
        const ageInMilliseconds = today - birthDate;

        // Convert age from milliseconds to years, months, and days
        const ageInYears = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365;
        const ageInMonths = (ageInYears - Math.floor(ageInYears)) * 12;
        const ageInDays = Math.floor((ageInMonths - Math.floor(ageInMonths)) * 30);

        // Display the age in years, months, and days
        document.getElementById("result").textContent = Math.floor(ageInYears) + " years, " + Math.floor(ageInMonths) + " months, and " + ageInDays + " days";
    }
}