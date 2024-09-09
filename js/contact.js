// Form validation script
function validateForm() {
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validate name (only letters)
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        alert('Please enter a valid name with letters only.');
        return false;
    }

    // Validate phone number (10-12 digits)
    if (!/^\d{10,12}$/.test(phone)) {
        alert('Please enter a valid phone number (10-12 digits).');
        return false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Show thank you message
    document.getElementById('thankYouMessage').style.display = 'block';

    // Simulate email sending (In practice, you would send the data to the server)
    setTimeout(function () {
        alert('Form submitted successfully.');
        document.getElementById('contactForm').reset();
    }, 1000);

    // Prevent the form from submitting
    return false;
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbztL1VYf7kTh1SDlo4mRT4Okh-BQD4cqcLBvDzq49kB4fJfHe_4EvfRD1j38mPLGav-/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
