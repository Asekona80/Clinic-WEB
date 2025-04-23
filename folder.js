document.getElementById("folderForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from reloading the page
  
    // Collect form data
    const formData = {
      fullName: document.getElementById("fullName").value,
      idNumber: document.getElementById("idNumber").value,
      dob: document.getElementById("dob").value,
      gender: document.getElementById("gender").value,
      phone: document.getElementById("phone").value,
      medicalHistory: document.getElementById("medicalHistory").value,
      medications: document.getElementById("medications").value,
      allergies: document.getElementById("allergies").value,
      insuranceProvider: document.getElementById("insuranceProvider").value,
      policyNumber: document.getElementById("policyNumber").value,
      nextOfKinName: document.getElementById("nextOfKinName").value,
      nextOfKinRelationship: document.getElementById("nextOfKinRelationship").value,
      nextOfKinPhone: document.getElementById("nextOfKinPhone").value
    };
  
    // Send data to the server
    fetch("http://127.0.0.1:5000/api/save-folder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Show feedback message on successful submission
        document.getElementById("feedbackMessage").textContent = data.message;
        document.getElementById("folderForm").reset(); // Reset form after successful submission
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  });
  