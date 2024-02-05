document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate email and password
      const email = emailInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (email === '' || password === '') {
        alert('Please enter both email and password.');
      } else if (!isValidEmail(email)) {
        alert('Invalid email format.');
      } else {
        // Perform your login logic here
        alert('Login successful!');
        form.reset(); // Clear form inputs
      }
    });
  
    function isValidEmail(email) {
      // Basic email validation using regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  