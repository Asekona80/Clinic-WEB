from twilio.rest import Client

# Your Twilio credentials
account_sid = 'AC4678fc70a3b04ae671c9738ab1c9ab75'
auth_token = 'b5e93d80a439b004ea3fda3cd0ae24d2'

# Create a Twilio client
client = Client(account_sid, auth_token)

# Ask the client for their phone number
from_phone_number = input("Enter your Twilio phone number (e.g., +12345678901): ")
to_phone_number = input("Enter the recipient's phone number (e.g., +12345678901): ")

# Send the message
try:
    message = client.messages.create(
        body="Hello from Twilio and Python! 🚀",
        from_=from_phone_number,  # Client's Twilio phone number
        to=to_phone_number        # Recipient's phone number
    )
    print("✅ Message sent! SID:", message.sid)
except Exception as e:
    print(f"Error: {e}")
