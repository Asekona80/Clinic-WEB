document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
  
    // Simulate a successful login by directly checking the credentials.
    // In a real-world app, you'd send these details to the server to verify.

    if (phoneNumber && password) {
        // Simulate successful login
        alert('Login successful!');
        
        // Redirect to the dashboard
        window.location.href = 'dasboard.html';  // Change this to the correct dashboard page
    } else {
        alert('Please enter both phone number and password.');
    }
});
