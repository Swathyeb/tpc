let students = [
    {
        name: "John Doe",
        admissionNumber: "123456",
        address: "123 Main St, City",
        phone: "555-1234",
        email: "johndoe@example.com",
        registrationNumber: "REG123",
        semester: "6",
        backlogs: "0",
        cgpa: "3.8",
        skills: "Java, C++, HTML",
        placementStatus: "Placed"
    },
    {
        name: "Jane Smith",
        admissionNumber: "654321",
        address: "456 Elm St, City",
        phone: "555-5678",
        email: "janesmith@example.com",
        registrationNumber: "REG456",
        semester: "5",
        backlogs: "1",
        cgpa: "3.5",
        skills: "Python, JavaScript, CSS",
        placementStatus: "Not Placed"
    }
];

const studentTable = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
const modal = document.getElementById("studentModal");
const closeBtn = document.getElementsByClassName("close")[0];


document.getElementById("addStudentBtn").onclick = function() {
    document.getElementById("studentForm").reset();
    document.getElementById("modalTitle").innerText = "Add Student";
    document.getElementById("studentIndex").value = '';
    modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

document.getElementById("studentForm").onsubmit = function(event) {
    event.preventDefault();
    const index = document.getElementById("studentIndex").value;

    const student = {
        name: document.getElementById("name").value,
        admissionNumber: document.getElementById("admissionNumber").value,
        address: document.getElementById("address").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        registrationNumber: document.getElementById("registrationNumber").value,
        semester: document.getElementById("semester").value,
        backlogs: document.getElementById("backlogs").value,
        cgpa: document.getElementById("cgpa").value,
        skills: document.getElementById("skills").value,
        placementStatus: document.getElementById("placementStatus").value,
    };

    if (index) {
        students[index] = student; // Edit existing student
    } else {
        students.push(student); // Add new student
    }
    
    modal.style.display = "none";
    displayStudents();
}

function displayStudents() {
    studentTable.innerHTML = ""; // Clear existing rows
    students.forEach((student, index) => {
        const row = studentTable.insertRow();
        Object.values(student).forEach(text => {
            const cell = row.insertCell();
            cell.innerText = text;
        });

        const actionCell = row.insertCell();
        const editButton = document.createElement("button");
        editButton.innerText = "Edit";
        editButton.onclick = () => editStudent(index);
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteStudent(index);
        actionCell.appendChild(deleteButton);
    });
}

function editStudent(index) {
    const student = students[index];
    document.getElementById("name").value = student.name;
    document.getElementById("admissionNumber").value = student.admissionNumber;
    document.getElementById("address").value = student.address;
    document.getElementById("phone").value = student.phone;
    document.getElementById("email").value = student.email;
    document.getElementById("registrationNumber").value = student.registrationNumber;
    document.getElementById("semester").value = student.semester;
    document.getElementById("backlogs").value = student.backlogs;
    document.getElementById("cgpa").value = student.cgpa;
    document.getElementById("skills").value = student.skills;
    document.getElementById("placementStatus").value = student.placementStatus;

    document.getElementById("studentIndex").value = index;
    document.getElementById("modalTitle").innerText = "Edit Student";
    modal.style.display = "block";
}

function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}