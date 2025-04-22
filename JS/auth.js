document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const phoneNumber = document.getElementById('phoneNumber').value;
    const password = document.getElementById('password').value;
  
    // Make an API call to the server to check if the phone number and password are correct.
    // If correct, send the OTP.
  
    fetch('/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Hide login form and show OTP form
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('otp-section').style.display = 'block';
        alert('OTP sent to your phone!');
      } else {
        alert('Invalid phone number or password');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  
  document.getElementById('otpForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const phoneNumber = document.getElementById('phoneNumber').value;
    const otp = document.getElementById('otp').value;
  
    // Make an API call to verify the OTP.
    fetch('/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, otp }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful!');
        window.location.href = '/dashboard';  // Redirect to the dashboard or home page after successful login
      } else {
        alert('Invalid OTP');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  