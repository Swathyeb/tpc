
function handleRegistration(event) {
    event.preventDefault();
    
    const memberId = document.getElementById("memberId").value;
    const membershipYear = document.getElementById("membershipYear").value;
    const name = document.getElementById("name").value;
    const role = document.getElementById("role").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    // Alerting the registration details
    alert(`Registration Details:\nMember ID: ${memberId}\nMembership Year: ${membershipYear}\nName: ${name}\nRole: ${role}\nPhone: ${phone}\nEmail: ${email}`);
    
    // Clear the form
    document.getElementById("registrationForm").reset();
}

// Assuming you have a form with an id "registrationForm" and an event listener
document.getElementById("registrationForm").addEventListener("submit", handleRegistration);
