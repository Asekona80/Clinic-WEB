from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/book-appointment', methods=['POST'])
def book_appointment():
    data = request.json
    print("Received appointment data:", data)
    
    return jsonify({
        "message": f"Appointment with {data['doctor']} on {data['appointmentDate']} at {data['appointmentTime']} is confirmed!"
    })

if __name__ == '__main__':
    app.run(debug=True)


app = Flask(__name__)
CORS(app)

@app.route('/api/save-folder', methods=['POST'])
def save_folder():
    data = request.json

    # You can store this data in a database here, but for now, we will just print it
    print("Received patient folder data:", data)

    # Simulate a success response
    return jsonify({
        "message": f"Medical folder for {data['fullName']} has been saved successfully!"
    })
    

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for local testing

# Existing route for booking appointments
@app.route('/api/book-appointment', methods=['POST'])
def book_appointment():
    data = request.json
    print("Received appointment data:", data)
    
    return jsonify({
        "message": f"Appointment with {data['doctor']} on {data['appointmentDate']} at {data['appointmentTime']} is confirmed!"
    })

# New route to save medical folder data
@app.route('/api/save-folder', methods=['POST'])
def save_folder():
    data = request.json
    print("Received folder data:", data)
    
    # Here, you would typically save this data to a database or process it further
    # For now, we're just printing it for testing purposes
    return jsonify({
        "message": "Your medical folder has been successfully saved!"
    })

if __name__ == '__main__':
    app.run(debug=True)


from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

app = Flask(__name__)
CORS(app)

openai.api_key = "YOUR_OPENAI_API_KEY"  # Replace with your actual key

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get("message", "")
    
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are a helpful clinic assistant."},
            {"role": "user", "content": user_message}
        ]
    )

    reply = response.choices[0].message.content.strip()
    return jsonify({"reply": reply})

if __name__ == '__main__':
    app.run(debug=True)

import requests
from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/news')
def get_health_news():
    api_key = "e5338cfdfe6746b7a79585301bf0cdda"  # Your API key
    url = f'https://newsapi.org/v2/everything?q=health&apiKey={api_key}'
    
    response = requests.get(url)
    data = response.json()
    articles = []
    
    for article in data['articles']:
        articles.append({
            'title': article['title'],
            'description': article['description'],
            'url': article['url'],
        })
    
    return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True)
