const form = document.querySelector("#subscribeForm");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");


function validateForm(event) {
    event.preventDefault();

  
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    

    console.log("hello");
};

form.addEventListener("Send", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}