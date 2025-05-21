# Simulating the message sending process without Twilio

def send_sms_simulated(from_phone_number, to_phone_number, message_body):
    # Simulate sending the SMS
    print("Simulating sending message...")
    print(f"From: {from_phone_number}")
    print(f"To: {to_phone_number}")
    print(f"Message: {message_body}")
    print("✅ Message sent successfully!")

# Your phone number (no Twilio)
from_phone_number = '+27818273587'  # Replace with your personal number
to_phone_number = '+27824206222'    # Replace with the recipient's number

# Message body
message_body = "Hello! This is a test message from your HealthCare Clinic app. 🚀"

# Simulate sending the message
send_sms_simulated(from_phone_number, to_phone_number, message_body)
