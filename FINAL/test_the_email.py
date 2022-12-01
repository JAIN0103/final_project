import smtplib, ssl
# we probably have to get rid of CS50 lib
from cs50 import SQL
db = SQL("sqlite:///FINAL.db")

address = 'notatestnotatest@gmail.com'
password = 'czbvlmwvikgzvxhv'
#recipient = 'notatestnotatest@gmail.com'
#message = 'Hello, World'



def sendEmail(recipient, message):
    #Create a secure SSL context: this loads the default security/ encryption settings
    context = ssl.create_default_context()
    port = 465  # For SSL
    with smtplib.SMTP_SSL("smtp.gmail.com", port, context=context) as server:
        # this logs us into the given gmail account
        server.login(address, password)
        # this sends the email
        server.sendmail(address, recipient, message)
        return 0
    return 1




def sendEmailToAll(message):
    recipients = db.execute("SELECT email FROM users")
    for recipient in recipients:
        # this line is only for debugging purposes, we have to make sure that no user can have no email address
        if recipient['email'] != None:
            sendEmail(recipient['email'], message)


sendEmailToAll('hello')

