const express = require("express");
const path = require("path");
const app = express();
const port = 80;
const fs = require ("fs");
// Express specific stuff
app.use('/static', express.static('static')); // For serving static files
app.use(express.urlencoded());
// Pug specific stuff
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// Set to view directory
// Endpoints
app.get('/', (req, res)=>{
    const con = "Get the membership for 60$";
    const params ={'title': 'Welcome to Gym website', "content":con};
    res.status(200).render('index.pug', params);
});

app.post("/",(req,res)=>{
    // console.log(req.body);
    name = req.body.name;
    age = req.body.age;
    gender = req.body.gender;
    address = req.body.address;
    more = req.body.more;
    let outputToWrite = `The name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`;
    fs.writeFileSync('output.txt', outputToWrite);
    const params ={'message': 'Your form has been submitted successfully'};
    res.status(200).render('index.pug', params);

});
// start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
// app.get("/this",(req,res)=>{
//     res.status(400).send("404 not found on website cwr");
// });

// app.get("/about",(req,res)=>{
//     res.send("This is my first about page express app with rohit");
// });

// app.post("/about",(req,res)=>{
//     res.send("This is my first post about page express app with rohit");
// });

// Our pug demo endpoint
// app.get("/demo",(req,res)=>{
//     res.status(200).render('demo', {title: 'Hi static website' , message: 'Hi there!you can download!'});
// });
