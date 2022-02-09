

import pymongo
from pymongo import MongoClient


cluster = MongoClient("mongodb+srv://taaham:123@cluster0.imuxc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = cluster["VirtualLabs-SanjeevSir"]
collection = db["Userid-passwords"]

# collection.insert_one(
#                         {
#                             "email":email,
#                             "institute":institute,
#                             "department":department,
#                             "password":password
#                         }
#             )
email = "taaha.m@somiya.edu"
password = "taaha0000"

results = collection.find_one({'email':email})
if results == None:
    print("Email not Registered")
    

elif results["password"] != password:
    print("Wrong Password")

else:
    print("Sucessfully logged in")
  