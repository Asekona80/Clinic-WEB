document.getElementById('sendMessage').addEventListener('click', function () {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    const chatBox = document.querySelector('.chat-box');

    if (message !== "") {
      // Display user's message
      const userMessage = document.createElement('div');
      userMessage.classList.add('message', 'sent');
      userMessage.innerHTML = `<p>${message}</p>`;
      chatBox.appendChild(userMessage);
      chatBox.scrollTop = chatBox.scrollHeight;
      input.value = "";

      // Send to backend
      fetch('http://127.0.0.1:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
      })
      .then(res => res.json())
      .then(data => {
        const botReply = document.createElement('div');
        botReply.classList.add('message', 'received');
        botReply.innerHTML = `<p>${data.reply}</p>`;
        chatBox.appendChild(botReply);
        chatBox.scrollTop = chatBox.scrollHeight;
      })
      .catch(error => {
        console.error("Error:", error);
      });
    }
  });