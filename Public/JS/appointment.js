document.getElementById("appointmentForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
  
    fetch("http://127.0.0.1:5000/api/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        doctor,
        appointmentDate,
        appointmentTime,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        document.getElementById("appointmentForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  });
  