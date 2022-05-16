# Virtual Labs Mini Project
# Sem-4 Comps

# Githib repository - https://github.com/taaaahahaha/MiniProjectSem4.git

# Imports for WebApp
from flask import *
from datetime import datetime

# Imports for MongoDb Database
import pymongo
from pymongo import MongoClient

# Imports for Email
import os
import smtplib, ssl
import datetime as dt
import time
from email.message import EmailMessage

# Imports for Random String Generator
import string
import random

# Global Variables
global emailid
global institute
global department
global password
global OTP
global session
session = False

app = Flask(__name__,template_folder='template',static_folder='static')

# Temporary Cluster id=taaham password=123
cluster = MongoClient("mongodb+srv://taaham:123@cluster0.imuxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["VirtualLabs-SanjeevSir"]
collection = db["Userid-passwords"]


# Random String generator Code
def random_string():
    res = ''.join(random.choices(string.ascii_uppercase +
							string.digits, k = 5))
    return str(res)


# BulkMailCode  - https://www.google.com/settings/security/lesssecureapps - ON
def mail(reciever_list):
    email_send = [reciever_list]  
    email_user = 'Vlabs.KJSIEIT@gmail.com' 
    email_password = 'KJSIEIT2022' 
    msg = EmailMessage()
    msg['Subject'] = 'Verification Code !!!'
    msg['From'] = email_user 
    msg['To'] = email_password

    global OTP
    msg.set_content('Your Verification code is '+ OTP)
    

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(email_user, email_password)
        smtp.send_message(msg, email_user, email_send)
        print('Email sent!')




# Landing Page
@app.route('/', methods=['GET', 'POST'])
def landingpage():
    global session
    session = False
    return render_template('LandingPage.html')


# Sign In
@app.route('/signin', methods=['GET', 'POST'])
def signin():

    if request.method == 'POST':
        email = str(request.form['email'])
        password = str(request.form['password'])
        
        if email=="admin@admin.com" and password=="admin":
            data_obj = collection.find({})
            return render_template('Admin.html', users=data_obj)

        results = collection.find_one({'email':email})
        if results == None:
            print("Email not Registered")
            return render_template('SignIn.html', message='Email Not Registered')

        elif results["password"] != password:
            print("Wrong Password")
            return render_template('SignIn.html', message='Wrong Password')

        else:
            # return render_template('dashboard.html', log) #Vlabpage
            global session
            session = True
            return redirect('/experiments') #Vlabpage
        
        
        return render_template('LandingPage.html')


    return render_template('SignIn.html')


# Dashboard - Experiments
@app.route('/experiments', methods=['GET', 'POST'])
def dashboard():
    global session
    if session:
        return render_template('dashboard.html',session=True)
    else:
        return render_template('SignIn.html', session=False, message="You need to be Logged In")


# Logout
@app.route('/logout', methods=['GET', 'POST'])
def logout():
    global session
    session = False
    return redirect('/')

  #About
@app.route('/about', methods=['GET', 'POST'])
def about():
    return render_template('About.html')



# Verify OTP
@app.route('/verify', methods=['GET', 'POST'])
def verify():
    global OTP
    global emailid
    global institute
    global department
    global password

    if request.method == 'POST':
        code = str(request.form['code'])
        if code==OTP:
            collection.insert_one(
                        {
                            "email":emailid,
                            "institute":institute,
                            "department":department,
                            "password":password
                        }
            )
            return render_template('SignIn.html', message="Sucessfully Registered")
        else:
            print("Wrong OTP")
            return render_template('SignIn.html', message="Wrong OTP Provided")

    
    OTP = random_string()
    mail(str(emailid))
    return render_template('Verify.html')




# Sign Up
@app.route('/signup', methods=['GET', 'POST'])
def signup():


    if request.method == 'POST':
        global emailid
        global institute
        global department
        global password
        emailid = str(request.form['email'])
        institute = str(request.form['institute'])
        department = str(request.form['department'])
        password = str(request.form['password'])

        results = collection.find_one({'email':emailid})

        if results == None:
            return redirect('verify')
            

        else:
            print("Email already in Use!!")
            return render_template('SignIn.html',message="Email Already in use.")

        
        return render_template('SignIn.html', message="Sucessfully Registered")


    return render_template('SignUp.html')








# Forgot Password
@app.route('/forgotpassword', methods=['GET', 'POST'])
def forgotpassword():
    global emailid
    if request.method == 'POST':
        email = str(request.form['email'])
        emailid = email
        # newpassword = str(request.form['newpassword'])
        results = collection.find_one({'email':email})
        if results == None:
            return render_template('SignIn.html', message="Email Not Registered.")

        else:
            return redirect('verifyforgottenpassword') 

        print(email,newpassword)

        
        return render_template('SignIn.html')


    return render_template('ForgotPassword.html')



# New password
@app.route('/newpassword', methods=['GET', 'POST'])
def newpassword():
    global emailid
    if request.method == 'POST':
        password = str(request.form['newpassword'])
        collection.update_one({"email":emailid},{"$set":{"password":password}})
        return redirect('/')

# Verify OTP
@app.route('/verifyforgottenpassword', methods=['GET', 'POST'])
def verifyforgottenpassword():
    global OTP
    global emailid
    global institute
    global department
    global password

    if request.method == 'POST':
        code = str(request.form['code'])
        if code==OTP:
            return render_template('NewPassword.html')
        else:
            print("Wrong OTP")
            return render_template('SignIn.html', message="Wrong OTP")

    
    OTP = random_string()
    mail(str(emailid))
    return render_template('Verify_ForgottenPassword.html')


# Verify OTP
@app.route('/<string:exp>', methods=['GET', 'POST'])
def exps(exp):
    global session

    if session==False:
        return render_template('SignIn.html',message="You need to LogIn")

    if exp=='pnjunction':
        return render_template('Exp1_PNJunction.html')

    elif exp=='ledplank':
        return render_template('Exp2_ledplank.html')

    elif exp=='energygap':
        return render_template('Exp4_energygap.html')

    elif exp=='photodiode':
        return render_template('Exp3_photodiode.html')

    elif exp=='zener':
        return render_template('Exp5_zenerStatic.html')

    elif exp=='ssd':
        return render_template('Exp6_ssd.html')


    return render_template('Verify_ForgottenPassword.html')









if __name__ == "__main__":
  app.secret_key = "xyz" 
  app.run(debug=True)
