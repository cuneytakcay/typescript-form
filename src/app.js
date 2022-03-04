var root = document.getElementById('root');
// Switch button (Dark/Light Mode)
var switchBtn = root.querySelector('.switch');
switchBtn.addEventListener('click', function () {
    root.classList.toggle('dark');
});
// Form handling
var form = root.querySelector('form');
var firstName = form.querySelector('[name="firstName"]');
var lastName = form.querySelector('[name="lastName"]');
var email = form.querySelector('[name="email"]');
var password = form.querySelector('[name="password"]');
var confirmPassword = form.querySelector('[name="confirmPassword"]');
var submit = form.querySelector('[type="submit"]');
var errorCont;
submit.addEventListener('click', function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    e.preventDefault();
    // First name cannot be empty
    if (firstName.value.trim() === '') {
        errorCont = (_a = firstName
            .closest('.input')) === null || _a === void 0 ? void 0 : _a.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Please enter your first name</p></div>';
    }
    else {
        errorCont = (_b = firstName
            .closest('.input')) === null || _b === void 0 ? void 0 : _b.querySelector('.error');
        errorCont.innerHTML = '';
    }
    // Last name cannot be empty
    if (lastName.value.trim() === '') {
        errorCont = (_c = lastName
            .closest('.input')) === null || _c === void 0 ? void 0 : _c.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Please enter your last name</p></div>';
    }
    else {
        errorCont = (_d = lastName
            .closest('.input')) === null || _d === void 0 ? void 0 : _d.querySelector('.error');
        errorCont.innerHTML = '';
    }
    // Must be a valid email address
    if (!email.value.match(/\S+@\S+\.\S+/)) {
        errorCont = (_e = email
            .closest('.input')) === null || _e === void 0 ? void 0 : _e.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Enter a valid email address</p></div>';
    }
    else {
        errorCont = (_f = email
            .closest('.input')) === null || _f === void 0 ? void 0 : _f.querySelector('.error');
        errorCont.innerHTML = '';
    }
    // Must be at least 6 characters long, include at least one number and one special character
    if (!password.value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)) {
        errorCont = (_g = password
            .closest('.input')) === null || _g === void 0 ? void 0 : _g.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><ul><li><span>&#x2716;</span> Must be at least 6 characters long</li><li><span>&#x2716;</span> Must have at least 1 numeric character</li><li><span>&#x2716;</span> Must have at least one special character</li></ul></div>';
    }
    else {
        errorCont = (_h = password
            .closest('.input')) === null || _h === void 0 ? void 0 : _h.querySelector('.error');
        errorCont.innerHTML = '';
    }
    // Must match the password
    if (confirmPassword.value !== password.value) {
        errorCont = (_j = confirmPassword
            .closest('.input')) === null || _j === void 0 ? void 0 : _j.querySelector('.error');
        errorCont.innerHTML =
            '<div class="error-inner"><p><span>&#x2716;</span> Passwords do not match</p></div>';
    }
    else {
        errorCont = (_k = confirmPassword
            .closest('.input')) === null || _k === void 0 ? void 0 : _k.querySelector('.error');
        errorCont.innerHTML = '';
    }
});
