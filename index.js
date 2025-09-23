// Select buttons and form
const signUpBtn = document.querySelector('#section1 button'); // Sign Up button
const registerFormContainer = document.querySelector('.register-form'); // Form container
const registerForm = document.getElementById('registerForm'); // The <form>

// When Sign Up is clicked → show form
signUpBtn.addEventListener('click', () => {
    signUpBtn.style.display = 'none'; // hide Sign Up button
    registerFormContainer.style.display = 'flex'; // show form
});

// When Register (form submit) → hide form and show button again
registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page reload

    signUpBtn.textContent = 'Registered'; // Change button text to 'Registered'

    // After 10 seconds, revert back to "Sign Up"
    setTimeout(() => {
        signUpBtn.textContent = 'Sign Up';
    }, 10000); // 10 seconds

    registerFormContainer.style.display = 'none'; // hide form
    signUpBtn.style.display = 'block'; // show Sign Up button again
});














































