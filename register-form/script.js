
var cities = ["City1", "City2", "City3", "City4"];

var isEmailFocused = false;
var isMobileNumberFocused = false;

document.addEventListener("DOMContentLoaded", function() {

  var cityDropdown = document.getElementById("city");
  cities.forEach(function(city) {
    var option = document.createElement("option");
    option.value = city;
    option.text = city;
    cityDropdown.add(option);
  });

  
  var dayDrop = document.getElementById("dobDay");
  for (var i = 1; i <= 31; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    dayDrop.add(option);
  }

 
  var monthdrop = document.getElementById("dobMonth");
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  months.forEach(function(month, index) {
    var option = document.createElement("option");
    option.value = index + 1;
    option.text = month;
    monthdrop.add(option);
  });

  var yearDrop = document.getElementById("dobYear");
  for (var i = 1900; i <= 2024; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.text = i;
    yearDrop.add(option);
  }

  document.getElementById("email").addEventListener("blur", function() {
    isEmailFocused = true;
    validateEmail();
  });

  document.getElementById("mobileNumber").addEventListener("blur", function() {
    isMobileNumberFocused = true;
    validateMobileNumber();
  });
});

function validateForm() {

  var isFormValid = true;

 
  validateName("firstName");

 
  validateName("lastName");

  validateEmail();

  validateMobileNumber();

 
  validateDateOfBirth();

 
  var genderInputs = document.querySelectorAll('input[name="gender"]');
  var genderErrorDiv = document.getElementById("genderError");
  if (!Array.from(genderInputs).some(input => input.checked)) {
    showError(genderErrorDiv, "Please select a gender");
    isFormValid = false;
  } else {
    hideError(genderErrorDiv);
  }

 
  var cityInput = document.getElementById("city");
  var cityErrorDiv = document.getElementById("cityError");
  if (cityInput.value === "") {
    showError(cityErrorDiv, "Please select a city");
    isFormValid = false;
  } else {
    hideError(cityErrorDiv);
  }

  
  validatePincode();

  
  if (isFormValid) {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    alert("Hi " + firstName + " " + lastName + "! Thanks for registering.");
  }
}

function validateName(inputId) {
  var input = document.getElementById(inputId);
  var errorDiv = document.getElementById(inputId + "Error");

  if (!isValidName(input.value)) {
    showError(errorDiv, "Invalid " + inputId.charAt(0).toUpperCase() + inputId.slice(1));
  } else {
    hideError(errorDiv);
  }
}

function validateEmail() {
  var emailInput = document.getElementById("email");
  var errorDiv = document.getElementById("emailError");

  var email = emailInput.value.trim(); 

  if (!isEmailFocused || email === "") {
    hideError(errorDiv);
  } else if (!isValidEmail(email)) {
    showError(errorDiv, "Invalid Email");
  } else {
    hideError(errorDiv);
  }
}

function validateMobileNumber() {
  var mobileInput = document.getElementById("mobileNumber");
  var errorDiv = document.getElementById("mobileNumberError");

  var mobileNumber = mobileInput.value.trim(); 

  if (!isMobileNumberFocused || mobileNumber === "") {
    hideError(errorDiv);
  } else if (!isValidMobileNumber(mobileNumber)) {
    showError(errorDiv, "Invalid Mobile Number");
  } else {
    hideError(errorDiv);
  }
}

function validateDateOfBirth() {
  var dayInput = document.getElementById("dobDay").value;
  var monthInput = document.getElementById("dobMonth").value;
  var yearInput = document.getElementById("dobYear").value;
  var errorDiv = document.getElementById("dobError");

  if (!isValidDateOfBirth(dayInput, monthInput, yearInput)) {
    showError(errorDiv, "Invalid Date of Birth");
  } else {
    hideError(errorDiv);
  }
}

function validatePincode() {
  var pincodeInput = document.getElementById("pincode");
  var pincodeErrorDiv = document.getElementById("pincodeError");

  if (!isValidPincode(pincodeInput.value)) {
    showError(pincodeErrorDiv, "Invalid Pincode");
  } else {
    hideError(pincodeErrorDiv);
  }
}

function isValidName(name) {
  return /^[a-zA-Z ]{1,20}$/.test(name);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidMobileNumber(mobileNumber) {
  return /^[0-9]{10}$/.test(mobileNumber);
}

function isValidDateOfBirth(day, month, year) {

  var birthDate = new Date(year, month - 1, day);
  var age = new Date().getFullYear() - birthDate.getFullYear();
  return age >= 18;
}

function isValidPincode(pincode) {
  return /^[0-9]{6}$/.test(pincode);
}

function showError(element, message) {
  element.innerHTML = message;
  element.style.display = "block";
}

function hideError(element) {
  element.innerHTML = "";
  element.style.display = "none";
}

