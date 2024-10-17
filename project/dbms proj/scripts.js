document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Add your login logic here
    console.log(`Username/Email: ${username}, Password: ${password}`);
    alert('Login functionality not implemented yet.');
});

document.getElementById('forgotPassword').addEventListener('click', function() {
    alert('Redirecting to forgot password page (not implemented).');
});

document.getElementById('register').addEventListener('click', function() {
    alert('Redirecting to registration page (not implemented).');
});

document.getElementById('adminLogin').addEventListener('click', function() {
    alert('Redirecting to admin login page (not implemented).');
});

// Switch between student and recruiter
const studentBtn = document.getElementById('studentBtn');
const recruiterBtn = document.getElementById('recruiterBtn');

studentBtn.addEventListener('click', function() {
    studentBtn.classList.add('active');
    recruiterBtn.classList.remove('active');
    document.getElementById('loginForm').reset(); // Reset the form
});

recruiterBtn.addEventListener('click', function() {
    recruiterBtn.classList.add('active');
    studentBtn.classList.remove('active');
    document.getElementById('loginForm').reset(); // Reset the form
});
