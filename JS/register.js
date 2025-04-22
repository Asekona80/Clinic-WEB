// JavaScript for registration form validation

document.getElementById("registerForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();
  
    // Get form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
  
    // Basic validation
    if (fullName === "" || email === "" || phoneNumber === "" || password === "" || confirmPassword === "") {
      alert("Please fill in all fields.");
      return;
    }
  
    // Validate phone number format (basic validation: should only contain numbers)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }
  
    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    // If everything is valid, simulate form submission
    alert("Registration successful!");
    // Optionally, you can redirect to the login page or another page:
    // window.location.href = "login.html";
  });
  