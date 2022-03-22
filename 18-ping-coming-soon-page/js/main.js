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
  console.log("valid!");
}
