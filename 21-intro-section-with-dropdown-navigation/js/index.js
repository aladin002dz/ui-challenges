document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('is-menu-open')
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    //const dropdownToggle = dropdown.querySelector('.dropdown');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    /*
        dropdownToggle.addEventListener('click', () => {
            dropdown.classList.toggle('open');
        });*/
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('open');
        if (dropdown.classList.contains('open')) {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + 'px';
        } else {
            dropdownMenu.style.maxHeight = 0;
        }
    });
    /*
        dropdownMenu.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    */
    //add max height to dropdown menu scrollHeight


    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});
