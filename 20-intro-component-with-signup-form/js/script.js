//credit to https://github.com/Lakorthus/FrontendMentorChallenge/blob/main/intro-component-with-signup-form-master/script.js
//credit to https://github.com/Lakorthus/FrontendMentorChallenge/blob/main/intro-component-with-signup-form-master/script.js
const form = document.getElementById("form1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstname = form["firstname"].value;
  const lastname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstname === "") {
    addErrorTo("firstname", "First Name is required");
  } else if (!isValid(firstname, nameRegexPattern)) {
    addErrorTo("firstname", "firstname is not valid");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastname === "") {
    addErrorTo("lastname", "Last Name is required");
  } else if (!isValid(lastname, nameRegexPattern)) {
    addErrorTo("lastname", "lastname is not valid");
  } else {
    removeErrorFrom("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (!isValid(email, emailRegexPattern)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else if (!isValid(email, emailRegexPattern)) {
    addErrorTo("password", "password is not valid");
  } else {
    removeErrorFrom("password");
  }
});

function addErrorTo(field, message) {
  console.log("field: ", field);
  console.log("message: ", message);
  const formControl = form[field].parentNode;
  formControl.classList.add("error");

  const small = formControl.querySelector("small");
  console.log("small: ", small);
  small.innerText = message;
}

function removeErrorFrom(field) {
  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

function isValid(field, regexPattern) {
  return regexPattern.test(field);
}

//My Regex patterns
const nameRegexPattern = /^[A-Z][A-Za-zéç]+(\s[A-Z][A-Za-zéç]+)*$/;
const emailRegexPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/* 
  Credit:
  https://stackoverflow.com/questions/16965953/regular-expressions-for-username-and-password
  (?=..)    is a lookahead that don't consume characters but only check
  (?=[^a-z]*[a-z]) check if there is at least 1 lower case letter 
  (?=\D*\d)   check if there is at least 1 digit
  [^:&.~\s]  a character class that exclude all the characters you don't want
*/
const passwprdRegexPattern = /^(?=[^a-z]*[a-z])(?=\D*\d)[^:&.~\s]{5,20}$/;
