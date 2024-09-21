Sign up:

api : http://localhost:5000/api/auth/signup

{
  "username": "testuser",
  "password": "password123"
}

/////////////////////////////////////////////////////////

Login :

api : http://localhost:5000/api/auth/login

{
  "username": "testuser",
  "password": "password123"
}

////////////////////////////////////////////////////////

Create task :

POST api :  http://localhost:5000/api/tasks

{
  "title": "frontend",
  "description": "use css"
}

///////////////////////////////////////////////////////////

GET api : http://localhost:5000/api/tasks

///////////////////////////////////////////////////////////

Update Task :

PUT api : http://localhost:5000/api/tasks/66ee5caf2cde70f72e2a29e3
{
  "title": "frontend",
  "description": "use css",
  "completed":"true"
}

/////////////////////////////////////////////////////////////

Delete Task :

DELETE api : http://localhost:5000/api/tasks/66ee5caf2cde70f72e2a29e3
