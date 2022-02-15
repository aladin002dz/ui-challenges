let tabs = document.querySelectorAll(".tab");

function openCurrAccordion(e) {
    let parent = this.parentElement;
    parent.classList.toggle("open");
}

tabs.forEach((tab) => {
    tab.childNodes[1].addEventListener('click', openCurrAccordion);
});
