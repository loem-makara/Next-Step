
const container = document.querySelector('.login-container');

const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

// Register
registerBtn.addEventListener('click', () => {
    container.classList.add('active');
    container.classList.remove('show-forgot');
});

// Login
loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
    container.classList.remove('show-forgot');
});

// Forgot Password
const forgotLink = document.querySelector('.login .forgot-link a');
const backLoginBtn = document.querySelector('.back-login-btn');

forgotLink.addEventListener('click', (e) => {
    e.preventDefault();

    container.classList.add('show-forgot');
    container.classList.remove('active');
});

// Back to Login
backLoginBtn.addEventListener('click', (e) => {
    e.preventDefault();

    container.classList.remove('show-forgot');
});

// Reset Password Form
const forgotForm = document.querySelector('#forgotForm');

forgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#resetEmail').value;
    const message = document.querySelector('#resetMessage');

    message.textContent = 'Email submitted: ' + email;
    message.style.color = 'green';
});
