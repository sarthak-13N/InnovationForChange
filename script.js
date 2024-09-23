// Function to open the popup
document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex';
});

// Function to close the popup
document.querySelector('.popup .close').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

// Function to toggle additional fields based on profession
function toggleFields() {
    var profession = document.getElementById('profession').value;
    var collegeNameGroup = document.getElementById('collegeNameGroup');
    var companyNameGroup = document.getElementById('companyNameGroup');

    if (profession === 'student') {
        collegeNameGroup.classList.remove('hidden');
        companyNameGroup.classList.add('hidden');
    } else if (profession === 'employed') {
        companyNameGroup.classList.remove('hidden');
        collegeNameGroup.classList.add('hidden');
    } else {
        collegeNameGroup.classList.add('hidden');
        companyNameGroup.classList.add('hidden');
    }
}

// Function to validate the form
function validateForm() {
    var startupName = document.getElementById('startupName').value;
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var gender = document.getElementById('gender').value;
    var country = document.getElementById('country').value;
    var profession = document.getElementById('profession').value;
    var collegeName = document.getElementById('collegeName').value;
    var companyName = document.getElementById('companyName').value;

    if (!startupName) {
        alert('Startup Name is required');
        return false;
    }
    if (!fullName) {
        alert('Full Name is required');
        return false;
    }
    if (!email) {
        alert('Email is required');
        return false;
    }
    if (!gender) {
        alert('Gender selection is required');
        return false;
    }
    if (!country) {
        alert('Country selection is required');
        return false;
    }
    if (profession === 'student' && !collegeName) {
        alert('College Name is required for students');
        return false;
    }
    if (profession === 'employed' && !companyName) {
        alert('Company Name is required for employed individuals');
        return false;
    }

    alert('Form Submitted Successfully!');
    return true;
}
