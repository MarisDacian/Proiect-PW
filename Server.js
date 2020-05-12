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

client.connect(err => {
    // perform actions on the collection object
    if (err)
        throw err;
    console.log('Connection works!');

});


app.use('/bower_components', express.static('bower_components'));
app.use('/css', express.static('css'));


app.use('/JavaScript', express.static('JavaScript'));
app.use('/WorkersPage', express.static('JavaScript'));
app.use('/img', express.static('img'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});


app.get('/Workers', (req, res) => {
    res.sendFile(__dirname + '/WorkersPage/Workers.html');
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

app.get('/GetWorkers', (req, res) => {
    api.getWorkers(client, res);
});

app.get('/GetOneWorkersLogin', function(req, res) {

    api.getOneWorkersLogin(client, req.query.workers, res);

});
app.get('/GetOneMailLogin', function(req, res) {

    api.getOneMailLogin(client, req.query.workers, res);

});
app.get('/GetOneCNPLogin', function(req, res) {

    api.getOneCNPLogin(client, req.query.workers, res);

});
app.get('/GetOneWorkersEmail', function(req, res) {

    api.getOneWorkersEmail(client, req.query.createUser, res);

});
app.get('/GetOneWorkersCNP', function(req, res) {

    api.getOneWorkersCNP(client, req.query.createUser, res);


});
app.get('/GetOneWorkersUsernameOnly', function(req, res) {

    api.getOneWorkersUsernameOnly(client, req.query.createUser, res);

});
app.get('/GetOneWorkersInfo', function(req, res) {

    api.getOneWorkersInfo(client, req.query.WorkersInfo, res);

});
app.post('/createWorkers', function(req, res) {

    api.createWorkers(client, req.body.user, res);
    res.send("Save was successful!");
});
app.post('/createItem', function(req, res) {

    api.createItem(client, req.body.itemData, res);
    res.send("Save was successful!");
});
app.post('/createShip', function(req, res) {
    console.log( req.body.shipData);
    api.createShip(client, req.body.shipData, res);
    res.send("Save was successful!");
});
app.post('/updateWorkers', function(req, res) {

    api.updateWorkers(client, req.body.editWorkers, res);
    res.send("Update was successful!");
});
app.delete('/deleteOneWorker', function(req, res) {

    api.deleteWorker(client, req.body.editWorkers, res);
    res.send("Update was successful!");
});