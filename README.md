# TodoApp repositoy
A repo which is planned to house brand new TodoApp in 2020!

# Access sample json response using below url
https://my-json-server.typicode.com/yogesh-nandwana/TodoApp/db </br>
https://my-json-server.typicode.com/yogesh-nandwana/TodoApp/todos

# Setting up json-server locally
$ npm install -g json-server </br>
Create a file called db.json(with required json) and add to the project folder </br>
$ json-server --watch db.json

# Below command invokes GET request on sample db resource
curl -X GET "http://localhost:3000/todos" </br>
curl -X GET "http://localhost:3000/todos?id=1" </br>
$ curl -X POST -H "Content-Type: application/json" -d '{
   "id": 6,
   "userId": "jk",
   "text": "some task",
   "completed": false
}' 
"http://localhost:3000/todos" </br>

curl -X GET "http://localhost:3000/todos?id=1&userId=jk" </br>

# Open issues