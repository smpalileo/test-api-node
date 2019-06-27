const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const TEST_API_ROUTES = require('./routes/test-api');
const db = require('mysql');
const createDB = require('./db');
const port = process.env.PORT || 3000

// // connection configurations

const sql = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});
 
// connect to database CREATE DATABASE  mydb

sql.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    createDB.createDb()
        .then(createDB.createMoviesTable()
        .then(createDB.createUsersTable()
    ))
  });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve API
app.use('/test-api', TEST_API_ROUTES);

// Serve Web Pages FOR ANGULAR
// app.get('/*', express.static(__dirname + 'test-app/dist/test-app'));

// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))