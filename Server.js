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

app.get('/checkAdmin', (req, res) => {
    res.sendFile(__dirname + '/checkAdmin.html');
});


app.get('/create-user', (req, res) => {
    res.sendFile(__dirname + '/create-user.html');
});

app.get('/GetUser', (req, res) => {
    api.getUsers(client, res);
});

app.get('/GetOneUserUsername', function(req, res) {

    api.getOneUserUsername(client, req.query.createUser, res);

});
app.get('/GetOneUserEmail', function(req, res) {

    api.getOneUserEmail(client, req.query.createUser, res);

});
app.get('/GetOneUserCNP', function(req, res) {

    api.getOneUserCNP(client, req.query.createUser, res);


});
app.get('/GetOneUserUsernameOnly', function(req, res) {

    api.getOneUserUsernameOnly(client, req.query.createUser, res);

});
app.post('/createUser', function(req, res) {

    api.createUser(client, req.body.user, res);
    res.send("Save was successful!");
});