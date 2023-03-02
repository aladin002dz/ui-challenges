document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('is-menu-open')
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownToggle = dropdown.querySelector('a');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdownToggle.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    dropdownMenu.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
