document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('is-menu-open')
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.setAttribute('aria-hidden', navbarCollapse.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
});

const dropdowns = document.querySelectorAll('.dropdown-toggle');
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.nextElementSibling;
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        dropdown.setAttribute('aria-expanded', dropdown.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        if (dropdown.classList.contains('open')) {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
            dropdownMenu.setAttribute('aria-hidden', 'false');
        } else {
            dropdownMenu.style.maxHeight = 0;
            dropdownMenu.setAttribute('aria-hidden', 'true');
        }
    });
});