const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form);
  return;
  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastName === "") {
    addErrorTo("lastname", "Last Name is required");
  } else {
    removeErrorFrom("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (!isValid(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else {
    removeErrorFrom("password");
  }
});

//credit to https://github.com/Lakorthus/FrontendMentorChallenge/blob/main/intro-component-with-signup-form-master/script.js
function addErrorTo(field, message) {
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function isValid(field, regexPattern) {
  return regexPattern.test(field);
}

/*
  let emailInput = document.getElementById("email").value;
  const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegexPattern.test(emailInput)) {
    document.getElementById("form1").classList.add("invalid");
    console.log("invalid!");
    return;
  }
  document.getElementById("form1").classList.remove("invalid");
  console.log("valid!");
  */
