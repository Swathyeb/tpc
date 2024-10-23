document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click(); // Trigger the file input click
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const previewContainer = document.getElementById('previewContainer');
    previewContainer.innerHTML = ''; // Clear previous images

    const files = event.target.files; // Get the selected files
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result; // Set the image source to the file data
            previewContainer.appendChild(img); // Append the image to the preview container
        };

        reader.readAsDataURL(file); // Read the file as a data URL
    }
});

// Handle resume upload
function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
        const fileName = document.createElement('p');
        fileName.textContent = `Selected: ${file.name}`;
        document.getElementById('upload-label').appendChild(fileName);
    }
}

// Skill management
document.getElementById('add-skill-button').addEventListener('click', function() {
    const newSkillInput = document.getElementById('new-skill');
    const newSkill = newSkillInput.value.trim();

    if (newSkill) {
        const li = document.createElement('li');
        li.textContent = newSkill;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-skill');
        
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(removeButton);
        document.getElementById('skills-list').appendChild(li);
        newSkillInput.value = ''; // Clear input after adding
    }
});

// Save button functionality
document.getElementById('save-button').addEventListener('click', function() {
    const studentName = document.getElementById('student-name').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const nationality = document.getElementById('nationality').value;
    
    const skills = Array.from(document.querySelectorAll('#skills-list li')).map(skill => skill.textContent.replace(' Remove', ''));

    // Here you can add logic to save the updated information to a database or server
    alert(`Profile updated:\nName: ${studentName}\nBranch: ${branch}\nSemester: ${semester}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nGender: ${gender}\nDate of Birth: ${dob}\nNationality: ${nationality}\nSkills: ${skills.join(', ')}`);
});

document.getElementById('update-personal-info').addEventListener('click', function() {
    const studentName = document.getElementById('student-name').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const nationality = document.getElementById('nationality').value;
    
    // Here you can add logic to save the updated personal information to a database or server
    alert(`Personal Info Updated:\nName: ${studentName}\nBranch: ${branch}\nSemester: ${semester}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nGender: ${gender}\nDate of Birth: ${dob}\nNationality: ${nationality}`);
});
