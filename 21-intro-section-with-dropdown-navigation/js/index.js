document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('is-menu-open')
});

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        if (dropdown.classList.contains('open')) {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
        } else {
            dropdownMenu.style.maxHeight = 0;
        }
    });
});
