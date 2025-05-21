const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle login (without OTP)
app.post('/login', (req, res) => {
  const { phoneNumber, password } = req.body;

  // Dummy check for phone number and password (you can replace with your validation)
  if (phoneNumber === '0818273587' && password === 'password123') {
    res.json({ success: true });  // Simulate successful login
  } else {
    res.json({ success: false, message: 'Invalid phone number or password' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
