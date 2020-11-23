/*document.querySelector(".tab").onclick = function () {
    let x = this.parentElement.nodeName;
    x.classList.toggle("open");
}*/

let tabs = document.querySelectorAll(".tab");
console.log(tabs);

function openAccordion(e) {
    let parent = this.parentElement;
    parent.classList.toggle("open");
}

tabs.forEach((tab) => {tab.addEventListener('click', openCurrAccordion);});



/*
document.querySelector(".tab").onclick = function() {
    var x = document.getElementById("myLI").parentElement.nodeName;
    document.querySelector(".tab").classList.toggle("open");
}
*/
