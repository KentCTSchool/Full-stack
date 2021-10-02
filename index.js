// GET request: /hello return "Hello Express JS"
// GET request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use Querystring to send values
// POST request: /user return  { "firstname":"Pritesh", "lastname": "Patel" }. Use path parameter to send values


//creating express project
// npm init
// npm i nodemon 
// npm i express


//Author: Kent Pedrocha

let express = require('express')
let app = express()

app.get("/hello", (req, res) => {
    res.send("Hello Express JS")
})


// Using query string parameter 
// http://localhost:8089/user?firstname=Kent&lastname=Pedrocha
app.get("/user", (req, res) => {
    let firstname = req.query.firstname
    // different name of getting the value 
    let lastname = req.query["lastname"]

    //creating object
    let response = {
        firstname,
        lastname
    }
    res.send(response)
})

//I have to use postman to get the answer
// Using path parameter 
// http://localhost:8089/user/Kent/Pedrocha
//I have to use params instead of query
app.post("/user/:firstname/:lastname", (req, res) => {
    let firstname = req.params.firstname
    // different name of getting the value 
    let lastname = req.params["lastname"]

    //creating object
    let response = {
        firstname,
        lastname
    }

    res.send(response)
})


//using a server
let server = app.listen(8089, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("Server running at: http://%s:%s", host, port)
})

