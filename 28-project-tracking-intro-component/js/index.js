const navbarCollapse = document.querySelector('.navbar-collapse');
const dropdowns = document.querySelectorAll('.dropdown-toggle');
document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('is-menu-open')
    this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
    navbarCollapse.setAttribute('aria-hidden', navbarCollapse.getAttribute('aria-hidden') === 'true' ? 'false' : 'true');
    dropdowns.forEach(dropdown => {
        dropdown.setAttribute('tabindex', dropdown.getAttribute('tabindex') === '-1' ? '0' : '-1');
    });
});


dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.nextElementSibling;
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        dropdown.setAttribute('aria-expanded', dropdown.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        dropdown.setAttribute('tabindex', dropdown.getAttribute('tabindex') === '-1' ? '0' : '-1');
        if (dropdown.classList.contains('open')) {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
            dropdownMenu.setAttribute('aria-hidden', 'false');
            dropdownMenu.querySelectorAll('a').setAttribute('tabindex', '0');
        } else {
            dropdownMenu.style.maxHeight = 0;
            dropdownMenu.setAttribute('aria-hidden', 'true');
            dropdownMenu.querySelectorAll('a').setAttribute('tabindex', '-1');
        }
    });
});


if (window.innerWidth > 991) {
    navbarCollapse.setAttribute('aria-hidden', 'false');
    dropdowns.forEach(dropdown => {
        dropdown.setAttribute('tabindex', '0');
    });
}
