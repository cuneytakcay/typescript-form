var root = document.getElementById('root');
// Switch button (Dark/Light Mode)
var switchBtn = root.querySelector('.switch');
switchBtn.addEventListener('click', function () {
    root.classList.toggle('dark');
});
// Form handling
var msgBox = root.querySelector('.msg-box');
var form = root.querySelector('form');
var firstName = form.querySelector('[name="firstName"]');
var lastName = form.querySelector('[name="lastName"]');
var email = form.querySelector('[name="email"]');
var password = form.querySelector('[name="password"]');
var confirmPassword = form.querySelector('[name="confirmPassword"]');
var fields = form.querySelectorAll('.field');
var inputs = form.querySelectorAll('input');
var errorContainers = form.querySelectorAll('.error');
var submit = form.querySelector('[type="submit"]');
var errorCont;
var hasError = false;
submit.addEventListener('click', function (e) {
    var _a, _b, _c, _d, _e;
    e.preventDefault();
    // First name cannot be empty
    if (firstName.value.trim() === '') {
        hasError = true;
        errorCont = (_a = firstName
            .closest('.input')) === null || _a === void 0 ? void 0 : _a.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Please enter your first name</p></div>';
    }
    // Last name cannot be empty
    if (lastName.value.trim() === '') {
        hasError = true;
        errorCont = (_b = lastName
            .closest('.input')) === null || _b === void 0 ? void 0 : _b.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Please enter your last name</p></div>';
    }
    // Must be a valid email address
    if (!email.value.match(/\S+@\S+\.\S+/)) {
        hasError = true;
        errorCont = (_c = email
            .closest('.input')) === null || _c === void 0 ? void 0 : _c.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Enter a valid email address</p></div>';
    }
    // Must be at least 6 characters long, include at least one number and one special character
    if (!password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)) {
        hasError = true;
        errorCont = (_d = password
            .closest('.input')) === null || _d === void 0 ? void 0 : _d.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><ul><li><span>&#x2716;</span> Must be at least 6 characters long</li><li><span>&#x2716;</span> Must have at least 1 numeric character</li><li><span>&#x2716;</span> Must have at least one special character</li></ul></div>';
    }
    // Must match the password
    if (confirmPassword.value !== password.value) {
        hasError = true;
        errorCont = (_e = confirmPassword
            .closest('.input')) === null || _e === void 0 ? void 0 : _e.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Passwords do not match</p></div>';
    }
    if (hasError)
        return;
    errorContainers.forEach(function (cont) { return (cont.innerHTML = ''); });
    inputs.forEach(function (input) { return (input.value = ''); });
    fields.forEach(function (field) { return field.classList.remove('moved-label'); });
    hasError = false;
    confirm('Well done! Sign up complete hypothetically.');
});
// When the input field is focused, or filled, move the labels out
// clear error for that field if it exists
inputs.forEach(function (input) {
    var parent = input.parentNode;
    input.addEventListener('focus', function () {
        parent.classList.add('moved-label');
        errorContainers.forEach(function (cont) { return (cont.innerHTML = ''); });
        hasError = false;
    });
    input.addEventListener('blur', function (e) {
        if (input.value === '')
            parent.classList.remove('moved-label');
    });
});
