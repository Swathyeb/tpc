function handleLogin(event) {
    event.preventDefault();
    const membershipId = document.getElementById("membershipId").value;
    const password = document.getElementById("password").value;

    // Here you can add your login logic (e.g., API call, validation, etc.)
    // For demonstration, we'll just alert the values
    alert(Membership ID: ${membershipId}\nPassword: ${password});
    
    // Clear the form
    document.getElementById("loginForm").reset();
}

// Optional: Add functionality for "Forgot Password?" and "Register Here"
document.getElementById("forgotPassword").addEventListener("click", function() {
    alert("Forgot Password functionality goes here.");
});

document.getElementById("registerHere").addEventListener("click", function() {
    alert("Redirecting to registration page...");
});