# Imports for WebApp
from flask import *
from datetime import datetime

# Imports for MongoDb Database
import pymongo
from pymongo import MongoClient

app = Flask(__name__,template_folder='template',static_folder='static')

# Temporary Cluster id=taaham password=123
cluster = MongoClient("mongodb+srv://taaham:123@cluster0.imuxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["VirtualLabs-SanjeevSir"]
collection = db["Userid-passwords"]


# Landing Page
@app.route('/', methods=['GET', 'POST'])
def landingpage():
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
            return render_template('EmailNotRegistered.html')

        elif results["password"] != password:
            print("Wrong Password")
            return render_template('WrongPassword.html')

        else:
            return render_template('VirtualLab.html') #Vlabpage
        
        
        return render_template('LandingPage.html')


    return render_template('SignIn.html')





# Sign Up
@app.route('/signup', methods=['GET', 'POST'])
def signup():


    if request.method == 'POST':
        email = str(request.form['email'])
        institute = str(request.form['institute'])
        department = str(request.form['department'])
        password = str(request.form['password'])

        results = collection.find_one({'email':email})

        if results == None:
            collection.insert_one(
                        {
                            "email":email,
                            "institute":institute,
                            "department":department,
                            "password":password
                        }
            )
            return render_template('signin.html')

        else:
            print("Email already in Use!!")

        
        return render_template('SignIn.html')


    return render_template('SignUp.html')








# Forgot Password
@app.route('/forgotpassword', methods=['GET', 'POST'])
def forgotpassword():

    if request.method == 'POST':
        email = str(request.form['email'])
        newpassword = str(request.form['newpassword'])

        print(email,newpassword)

        
        return render_template('SignIn.html')


    return render_template('ForgotPassword.html')








if __name__ == "__main__":
    app.secret_key = "xyz" 
    app.run(debug=True)