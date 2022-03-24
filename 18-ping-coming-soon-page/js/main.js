function validateForm() {
  this.preventDefault;
  let emailInput = document.getElementById("email").value;
  const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegexPattern.test(emailInput)) {
    document.getElementById("mail-form").classList.add("invalid");
    console.log("invalid!");
    return;
  }
  document.getElementById("mail-form").classList.remove("invalid");
  /* Display a validation toast for the user***************************************/
  /*code snnipet from :https://www.w3schools.com/howto/howto_js_snackbar.asp*/
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
    document.getElementById("email").value = "";
  }, 3000);

  console.log("valid!");
}
