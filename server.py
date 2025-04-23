from flask import Flask, request, jsonify
from flask_cors import CORS
import openai
import requests
import sqlite3

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for local testing

# OpenAI API Key (Replace with your actual key)
openai.api_key = "YOUR_OPENAI_API_KEY"

# Route to book an appointment
@app.route('/api/book-appointment', methods=['POST'])
def book_appointment():
    data = request.json
    print("Received appointment data:", data)
    
    return jsonify({
        "message": f"Appointment with {data['doctor']} on {data['appointmentDate']} at {data['appointmentTime']} is confirmed!"
    })

# Route to save medical folder data
@app.route('/api/save-folder', methods=['POST'])
def save_folder():
    data = request.json
    print("Received folder data:", data)
    
    # Here, you would typically save this data to a database or process it further
    # For now, we're just printing it for testing purposes
    return jsonify({
        "message": "Your medical folder has been successfully saved!"
    })

# Route for AI-powered chat (e.g., with a clinic assistant)
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

# Route to fetch latest health news
@app.route('/api/news', methods=['GET'])
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

# Route to get the latest temperature data (from your database)
def get_db_connection():
    connection = sqlite3.connect('database.db')
    connection.row_factory = sqlite3.Row
    return connection

@app.route('/api/get-latest-temperature', methods=['GET'])
def get_latest_temperature():
    connection = get_db_connection()
    cursor = connection.cursor()
    cursor.execute('SELECT temperature FROM temperature_data ORDER BY id DESC LIMIT 1')
    row = cursor.fetchone()
    connection.close()
    
    if row:
        return jsonify({'temperature': row['temperature']})
    else:
        return jsonify({'message': 'No data available'}), 404

# Run the Flask app
if __name__ == '__main__':
    app.run(debug=True)
