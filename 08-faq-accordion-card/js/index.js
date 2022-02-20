var accordionHeaders = document.getElementsByClassName("accordion-header");
var toggleAccordionItem = function (target) {
  document.getElementById(target).classList.toggle("accordion-item-open");
};

for (accordionHeader of accordionHeaders) {
  let target = accordionHeader.getAttribute("data-target");
  accordionHeader.addEventListener("click", () => toggleAccordionItem(target));
}
