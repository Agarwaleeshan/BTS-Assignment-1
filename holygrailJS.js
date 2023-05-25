document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    gender: document.getElementById('gender').value,
    // Add the remaining form fields here
    // For example:
    phone: document.getElementById('phone').value,
    university: document.getElementById('university').value,
    address: document.getElementById('address').value,
    dob: document.getElementById('dob').value,
    
  };

  // Logging form data in JSON
  console.log(JSON.stringify(formData));
});
