// sign up button functionality
const signUpBtn = document.querySelector('.sign-up-btn');
const signUpResultSection = document.querySelector('.sign-up-result');
const signUpSuccess = "You have successfully signed up for the auction. Please confirm your registration via email.";
const signUpFailure = "Please enter all the fields try again."
signUpBtn.addEventListener('click', function signUp(event) {
    event.preventDefault();

    // fetch values from the input fields - variables declared inside the function to fetch values
    // not ONCE - during the initial script execution but when the eventhandler function is invoked
    // so values can be updated and retrieved dynamically after user types in values in the given fields
    const usernameParam = document.getElementById('user-name-param').value.trim();
    const passwordParam = document.getElementById('password-param').value.trim();
    const numberParam = document.getElementById('number-param').value.trim();
    const emailParam = document.getElementById('email-param').value.trim();

    if (usernameParam === "" || passwordParam === "" || numberParam === "" || emailParam === "") {
        signUpResultSection.style.color = 'red';
        signUpResultSection.textContent = signUpFailure;
        signUpBtn.innerText = "SIGN UP";
    } else {
        signUpResultSection.style.color = 'green';
        signUpResultSection.textContent = "Thank you" + " " + usernameParam + ":" + " " + signUpSuccess;
        signUpBtn.disabled = true;
        signUpBtn.innerText = "Signed Up";
    }
});

// login button and SSO links functionality 
const loginBtn = document.getElementById('log-in-btn');
const ssoLogins = document.getElementsByClassName('sso-login');
const logInResult = document.querySelector('.log-in-result')
const ssoLoginsHtmlCollection = Array.from(ssoLogins);

loginBtn.addEventListener('click', function logIn(event) {
    event.preventDefault();

    loginBtn.disabled = true;
    loginBtn.textContent = "Logged In";
    logInResult.style.color = 'green';
        logInResult.textContent = "Log In Success";
});

// iterating through the Collection of html elements - ssoLoginHtmlCollection

// each element from the Collection will be assigned to the parameter/variable - ssoLogin
// in the forEach anonymous function 
// event listeners are implemented on the individual elements from the Collection - ssoLogin
ssoLoginsHtmlCollection.forEach(function (ssoLogin) {
    ssoLogin.addEventListener('click', function (event) {
        event.preventDefault();

        loginBtn.disabled = true;
        loginBtn.textContent = "Logged In via SSO";
        logInResult.style.color = 'green';
        logInResult.textContent = "SSO: Log In Success";
    });
});