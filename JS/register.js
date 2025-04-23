// JavaScript for registration form validation
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Basic validation
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // Basic phone number validation (10 digits only)
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phoneNumber)) {
        alert("Please enter a valid phone number (10 digits).");
        return;
    }

    // Password match validation
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Simulate saving user (e.g., in localStorage or backend)
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        alert("An account with this email already exists. Please login instead.");
        window.location.href = "login.html"; // Redirect to login page
        return;
    }

    // Save new user (optional: encrypt password before saving)
    users.push({ fullName, email, phoneNumber, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! Redirecting to login page...");
    window.location.href = "login.html";
});
