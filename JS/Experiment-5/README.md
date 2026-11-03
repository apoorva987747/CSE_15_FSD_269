Experiment 5 – HTTP Routes in Node.js
Aim
To implement GET, POST, PUT, and DELETE routes using Node.js and Express.js.

Objective
To understand how different HTTP methods are used to perform operations on resources.

Technologies Used
Node.js
Express.js
Files
exp5.js – Complete implementation of GET, POST, PUT and DELETE
getpost.js – Existing GET and POST practice
reqMethod.js – Existing request-method practice
Description
The application maintains a list of users and provides routes for performing CRUD operations.

GET
Used to retrieve users.

GET /users
GET /users/:id
POST
Used to create a new user.

POST /users
Example JSON:

{
    "name": "Rahul",
    "email": "rahul@gmail.com"
}
PUT
Used to update an existing user.

PUT /users/:id
Example JSON:

{
    "name": "Rahul Updated",
    "email": "rahulupdated@gmail.com"
}
DELETE
Used to delete a user.

DELETE /users/:id
How to Run
From the JS directory:

node Experiment-5/exp5.js
The server will run at:

http://localhost:3000
Testing
GET
Open:

http://localhost:3000/users
POST
Send a POST request to:

http://localhost:3000/users
with JSON data.

PUT
Send a PUT request to:

http://localhost:3000/users/1
DELETE
Send a DELETE request to:

http://localhost:3000/users/1
Expected Result
The server performs create, read, update, and delete operations on the user data.

Learning Outcome
This experiment demonstrates how HTTP methods and Express.js routes are used to implement CRUD-style operations in a Node.js application.
