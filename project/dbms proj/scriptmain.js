const recruiterToggle = document.getElementById('recruiter-toggle');
const studentToggle = document.getElementById('student-toggle');
const formTitle = document.getElementById('form-title');
const loginButton = document.getElementById('login-btn');

let isRecruiter = true;

// Toggle between recruiter and student login
recruiterToggle.addEventListener('click', function() {
    isRecruiter = true;
    updateForm();
});

studentToggle.addEventListener('click', function() {
    isRecruiter = false;
    updateForm();
});

// Handle login button click
loginButton.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`${isRecruiter ? 'Recruiter' : 'Student'} Login Successful`);
        // Handle actual authentication here
    } else {
        alert('Please enter username and password');
    }
});

// Handle registration link click
document.getElementById('register-link').addEventListener('click', function() {
    alert('Redirecting to registration page...');
    // Redirect to registration page
});

// Update form based on toggle state
function updateForm() {
    formTitle.textContent = isRecruiter ? 'Recruiter Login' : 'Student Login';
    recruiterToggle.classList.toggle('active', isRecruiter);
    studentToggle.classList.toggle('active', !isRecruiter);
}

