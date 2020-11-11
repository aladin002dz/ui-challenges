// Toggle Display Class
document.querySelector(".share-btn").onclick = function() {
    document.querySelector(".social-link").classList.toggle("display-none");

    // on mobile display
    document.querySelector(".author").classList.toggle("display-none-mobile");
}
