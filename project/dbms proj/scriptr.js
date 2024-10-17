function toggleFields() {
    const userType = document.getElementById("userType").value;
    const studentFields = document.getElementById("studentFields");
    const recruiterFields = document.getElementById("recruiterFields");

    if (userType === "student") {
        studentFields.style.display = "block";
        recruiterFields.style.display = "none";
    } else {
        studentFields.style.display = "none";
        recruiterFields.style.display = "block";
    }
}

// Optional: Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Registration submitted!");
    // Here you can add code to handle the form data
});