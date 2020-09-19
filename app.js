let inputs = document.querySelectorAll(".inputs");
let emailInput = document.getElementById("i-email");
let countryInput = document.getElementById("i-country");
let zipInput = document.getElementById("i-zip");
let pWordInput = document.getElementById("i-password");
let conPWordInput = document.getElementById("i-confirm-password");
let submitBtn = document.getElementById("submit-btn");

let emailValidation = () => {
  let emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let errorSpan = document.getElementById("error-0");
  let validate =
    emailInput.value.length == 0 || !emailRegExp.test(emailInput.value);
  if (validate) {
    emailInput.className = "error-input";
    errorSpan.style.display = "inline";
    errorSpan.textContent = "Invalid Email address";
    return false;
  } else {
    emailInput.className = "success-input";
    errorSpan.style.display = "none";
    return true;
  }
};

emailInput.addEventListener("input", function () {
  emailValidation();
});

let countryValidation = () => {
  let errorSpan = document.getElementById("error-1");
  let validate = countryInput.value.length === 0;

  if (validate) {
    countryInput.className = "error-input";
    errorSpan.style.display = "inline";
    errorSpan.textContent = "field cannot be empty";
    return false;
  } else {
    countryInput.className = "success-input";
    errorSpan.style.display = "none";
    return true;
  }
};

countryInput.addEventListener("input", function () {
  countryValidation();
});

let zipValidation = () => {
  let errorSpan = document.getElementById("error-2");
  let validate =
    zipInput.value.length === 0 ||
    zipInput.value.length !== 5 ||
    isNaN(parseInt(zipInput.value));

  if (validate) {
    zipInput.className = "error-input";
    errorSpan.style.display = "inline";
    errorSpan.textContent = "Zip code must be 5 charcters long";
    return false;
  } else {
    zipInput.className = "success-input";
    errorSpan.style.display = "none";
    return true;
  }
};

zipInput.addEventListener("input", function () {
  zipValidation();
});

let pWordValidation = () => {
  let errorSpan = document.getElementById("error-3");
  let validate =
    pWordInput.value.length === 0 ||
    pWordInput.value.length < 8 ||
    pWordInput.value.length > 50;

  if (validate) {
    pWordInput.className = "error-input";
    errorSpan.style.display = "inline";
    errorSpan.textContent =
      "Password cannot be empty and must be between 8-50 characters long";
    return false;
  } else {
    errorSpan.style.display = "none";
    pWordInput.className = "success-input";
    return true;
  }
};

pWordInput.addEventListener("input", function () {
  pWordValidation();
});

let conPWordValidation = () => {
  let errorSpan = document.getElementById("error-4");
  let validate =
    conPWordInput.value.length === 0 ||
    conPWordInput.value.length < 8 ||
    conPWordInput.value.length > 50;

  if (validate) {
    conPWordInput.className = "error-input";
    errorSpan.style.display = "inline";
    errorSpan.textContent =
      "Password cannot be empty and must be between 8-50 characters long";
    return false;
  } else {
    conPWordInput.className = "success-input";
    errorSpan.style.display = "none";
    return true;
  }
};

conPWordInput.addEventListener("input", function () {
  conPWordValidation();
});

submitBtn.addEventListener("click", function () {
  if (
    emailValidation() &&
    countryValidation() &&
    zipValidation() &&
    pWordValidation() &&
    conPWordValidation()
  ) {
    if (pWordInput.value === conPWordInput.value) {
      emailInput.value = "";
      countryInput.value = "";
      zipInput.value = "";
      pWordInput.value = "";
      conPWordInput.value = "";
      alert("Form Validation Successful");
    } else {
      let errorSpan1 = document.getElementById("error-3");
      let errorSpan2 = document.getElementById("error-4");
      errorSpan1.textContent = "Passwords do not match";
      errorSpan1.style.display = "inline";
      errorSpan2.textContent = "Passwords do not match";
      errorSpan2.style.display = "inline";

      pWordInput.value = "";
      pWordInput.className = "error-input";
      conPWordInput.value = "";
      conPWordInput.className = "error-input";
    }
  }
});
