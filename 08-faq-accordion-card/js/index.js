var accordionHeaders = document.getElementsByClassName("accordion-header");
var toggleAccordionItem = function (e) {
  e.target.parentElement.classList.toggle("accordion-item-open");
};

for (accordionHeader of accordionHeaders) {
  accordionHeader.addEventListener("click", toggleAccordionItem);
}
