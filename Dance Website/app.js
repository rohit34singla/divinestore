// const express = require("express");
// const path = require("path");
// const app = express();
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');

// mongoose.connect('mongodb://localhost/contact');
// const port = 8000;

// // Define mongoose schema
// const kittySchema = new mongoose.Schema({
//     name: String,
//     phone: String,
//     email: String,
//     address: String,
//     desc: String
//   });

// const contact = mongoose.model('contact', kittySchema);

// // Express specific stuff
// app.use('/static', express.static('static')); // For serving static files
// app.use(express.urlencoded());
// // Pug specific stuff
// app.set('view engine', 'pug');// Set the template engine as pug
// app.set('views', path.join(__dirname, 'views'));// Set to view directory
// // Endpoints
// app.get('/',(req,res)=>{
//     const params = { }
//     res.status(200).render('home.pug');
// });

// app.get('/contact',(req,res)=>{
//     const params = { }
//     res.status(200).render('contact.pug');
// });


// app.post('/contact',(req,res)=>{
//     var myData = new contact(req.body);
//     myData.save().then(()=>{
//         res.send("This item has been saved to the database")
//     }).catch(()=>{
//         res.status(400).send("Item was not saved to the database")
//     });

//     // res.status(200).render('contact.pug');
// });

// Start the server
// app.listen(port, ()=>{
//     console.log(`The application started successfully on port ${port}`);
// })

// OR

const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Require body-parser

mongoose.connect('mongodb://localhost/contact');
const port = 8000;

// Define mongoose schema
const kittySchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});

const contact = mongoose.model('contact', kittySchema);

// Express specific stuff
app.use('/static', express.static('static')); // For serving static files
app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser for URL-encoded data
app.use(bodyParser.json()); // Use body-parser for JSON data

// Pug specific stuff
app.set('view engine', 'pug'); // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); // Set to view directory

// Endpoints
app.get('/', (req, res) => {
    res.status(200).render('home.pug');
});

app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug');
});

app.post('/contact', (req, res) => {
    var myData = new contact(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database");
    }).catch(() => {
        res.status(400).send("Item was not saved to the database");
    });
});

// Start the server
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
