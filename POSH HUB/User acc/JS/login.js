function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(`Email: ${email}, Password: ${password}`);
    alert('Login button clicked');
}

document.getElementById('signUpButton').addEventListener('click', function() {
    window.location.href = 'signup.html';
});