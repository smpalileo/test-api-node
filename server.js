const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const TEST_API_ROUTES = require('./routes/test-api');
const db = require('mysql');
// connection configurations
const sql = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydb'
});
 
// connect to database
sql.connect();

app.use(cors());
app.use(bodyParser.json({ limit: 1024 * 1024 * 1024 * 4 }));
app.use(bodyParser.urlencoded({
    limit: 1024 * 1024 * 1024 * 4,
    extended: true
}));
// Serve API
app.use('/test-api', TEST_API_ROUTES);

// Serve Web Pages FOR ANGULAR
app.get('/*', express.static(__dirname + 'test-app/dist/test-app'));

app.listen(process.env.PORT || 8080);