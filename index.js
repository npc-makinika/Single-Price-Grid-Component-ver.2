// Select the Sign Up button in your pricing box
const signUpBtn = document.querySelector('#section1 button');

// When the Sign Up button is clicked
signUpBtn.addEventListener('click', function() {

    // HTML code for the signup form as a string
    const formHTML = `
        <form>
            <input placeholder="Username"><br>  <!-- Username input -->
            <input type="email" placeholder="Email"><br>  <!-- Email input -->
            <input type="password" placeholder="Password"><br>  <!-- Password input -->
            <button type="button" id="registerBtn">Register</button> <!-- Register button -->
        </form>
    `;

    // Insert the form right after the Sign Up button
    signUpBtn.insertAdjacentHTML('afterend', formHTML);

    // Select the Register button we just added and add a click event
    document.getElementById('registerBtn').addEventListener('click', function() {
        // Get the value entered in the first input (Username)
        const username = document.querySelector('input').value;

        // Show a simple alert with the entered username
        alert('Sign up successful' + username);
    });
    
     

});

