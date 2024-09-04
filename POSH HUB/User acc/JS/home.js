document.addEventListener("DOMContentLoaded", () => {
    const navList = document.getElementById('nav-list');
    const loginLink = document.getElementById('login');
    const signupLink = document.getElementById('signup');

    navList.addEventListener('click', (event) => {
        if (event.target.tagName === 'LI') {
            const items = navList.getElementsByTagName('li');
            for (let item of items) {
                item.classList.remove('home');
            }
            event.target.classList.add('home');
        }
    });

    loginLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Login functionality to be implemented.');
    });

    signupLink.addEventListener('click', (event) => {
        event.preventDefault();
        alert('Sign up functionality to be implemented.');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const authLinks = document.getElementById('auth-links');

    burger.addEventListener('click', () => {
        authLinks.classList.toggle('active');
    });
});


