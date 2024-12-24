// Array to store student records
let studentDatabase = JSON.parse(localStorage.getItem('studentDatabase')) || [];

// Function to save the database to localStorage
function saveToLocalStorage() {
    localStorage.setItem('studentDatabase', JSON.stringify(studentDatabase));
}

// Function to render the database on the page
function renderDatabase() {
    const databaseSection = document.getElementById('database');
    databaseSection.innerHTML = ''; // Clear the section

    if (studentDatabase.length === 0) {
        databaseSection.innerHTML = '<p class="text-white text-center p-4">No records found.</p>';
        return;
    }

    studentDatabase.forEach((student, index) => {
        const studentCard = document.createElement('div');
        studentCard.id= 'studentCard';
        studentCard.className = 'm-4 p-4 border-2 border-black bg-opacity-100 rounded-xl shadow-lg';
        studentCard.innerHTML = `
            <h3 class="text-xl font-bold text-gray-800">${student.name}</h3>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Contact:</strong> ${student.contact}</p>
            <p><strong>Roll:</strong> ${student.roll}</p>
            <button  onclick="editStudent(${index})" class="bg-green-700 hover:bg-blue-600 hover:underline hover:border-2 border-black text-white p-2 rounded mt-2">Edit</button>
            <button onclick="deleteStudent(${index})" class="bg-red-500  hover:bg-red-900 hover:underline hover:border-2 border-black text-white p-2 rounded mt-2">Delete</button>
        `;
        databaseSection.appendChild(studentCard);
    });
}

// Function to add a student
function addStudent(event) {
    event.preventDefault();

    const id = document.getElementById('sid').value.trim();
    const name = document.getElementById('name1').value.trim();
    const email = document.getElementById('mail').value.trim();
    const contact = document.getElementById('contact').value.trim();
    const roll = document.getElementById('roll').value.trim();

    if (!id || !name || !email || !contact || !roll) {
        alert('Please fill in all fields.');
        return;
    }

    const newStudent = { id, name, email, contact, roll };
    studentDatabase.push(newStudent);
    saveToLocalStorage();
    renderDatabase();

    // Clear form fields
    document.getElementById('sid').value = '';
    document.getElementById('name1').value = '';
    document.getElementById('mail').value = '';
    document.getElementById('contact').value = '';
    document.getElementById('roll').value = '';

    alert('Student added successfully!');
}

// Function to delete a student
function deleteStudent(index) {
    if (confirm('Are you sure you want to delete this student?')) {
        studentDatabase.splice(index, 1);
        saveToLocalStorage();
        renderDatabase();
        alert('Student deleted successfully!');
    }
}

// Function to edit a student
function editStudent(index) {
    const student = studentDatabase[index];

    const id = prompt('Edit Student ID:', student.id);
    const name = prompt('Edit Student Name:', student.name);
    const email = prompt('Edit Student Email:', student.email);
    const contact = prompt('Edit Student Contact:', student.contact);
    const roll = prompt('Edit Student Roll:', student.roll);

    if (id && name && email && contact && roll) {
        studentDatabase[index] = { id, name, email, contact, roll };
        saveToLocalStorage();
        renderDatabase();
        alert('Student updated successfully!');
    } else {
        alert('Update cancelled or incomplete.');
    }
}

// Attach event listener to the registration form
const registrationForm = document.querySelector('form');
if (registrationForm) {
    registrationForm.addEventListener('submit', addStudent);
}

// Initial render of the database
renderDatabase();
