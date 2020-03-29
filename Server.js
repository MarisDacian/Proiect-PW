const express = require('express');
const app = express();
const api = require('./serverside/mess-api');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAdmin:dbAdmin@cluster0-vaxrd.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true }, );
//const db = new MongoClient().getDB("PortDB");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(3000, () => {
    console.log('listening on 3000');
});

var dbo;
client.connect(err => {
    // perform actions on the collection object
    if (err)
        throw err;
    console.log('Connection works!');
    var dbo = client.db("PortDB");
    dbo.collection("Users").find({ firsName: "Dacian", lastName: "Maris" }, { projection: { firsName: 1, lastName: 1 } }).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);

    });
});


app.use('/bower_components', express.static('bower_components'));
app.use('/css', express.static('css'));


app.use('/JavaScript', express.static('JavaScript'));
app.use('/img', express.static('img'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

app.get('/user', (req, res) => {
    res.sendFile(__dirname + '/userPage/user.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/adminPage/admin.html');
});


app.get('/create-user', (req, res) => {
    res.sendFile(__dirname + '/create-user.html');
});

app.get('/GetUser', (req, res) => {
    api.getUsers(client, res);
});

app.get('/GetOneUser', function(req, res) {
    console.log(req.query.createUser);
    api.getOneUser(client, req.query.createUser, res);
});

app.post('/createUser', function(req, res) {
    
    api.createUser(client, req.body.user, res);
    res.send("Save was successful!");
});