const express = require('express');
const app = express();
const api = require('./serverside/mess-api');
const bodyParser = require('body-parser');
const fetch = require("node-fetch");
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbAdmin:dbAdmin@cluster0-vaxrd.mongodb.net/test";
const client = new MongoClient(uri, { useNewUrlParser: true }, );



//const db = new MongoClient().getDB("PortDB");
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
// app.listen(3000, () => {
//     console.log('listening on 3000');
// });

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
///////////////////////////
// let messageData;
// function countdown(res) {
//     res.write("data: " + messageData + "\n\n")

//       setTimeout(() => countdown(res), 1000)
//       messageData="";
//   }
// app.get('/countdown', function(req, res) {
//     res.writeHead(200, {
//       'Content-Type': 'text/event-stream',
//       'Cache-Control': 'no-cache',
//       'Connection': 'keep-alive'
//     })
//     countdown(res);

//   })

////////////////////////


var sockets = [];

var http = require('http').createServer(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log('a user connected');
    let userData;
    socket.on('setWorkerStatus', (statusData) => {
        userData=statusData;
        api.updateWorkerStatus(client, statusData);
        //socket.broadcast.emit('updateWorkerStatus', statusData);
      });
     
    socket.on('disconnect', function() {
        fetch('http://worldclockapi.com/api/json/utc/now')
        .then(function(res){
          
        return res.json();
        })
        .then(function(json){
        time=json.currentDateTime;
        var serverTime = time.split("T");
        var userTime = userData;
        console.log(userData);

        //userTime=userTime.split("T");
        console.log(serverTime);
        console.log(userTime);
        
        })
        .catch((error) => {
        console.log('Looks like there was a problem: \n', error);
       });

        if(userData!=null){
        userData[1]="Not Working";
        api.updateWorkerStatus(client, userData);
       // socket.broadcast.emit('updateWorkerStatus', statusData);
        }
    });
    sockets.push(socket);
  });





 // app.use(express.json({limit: '50mb'}));
 // app.use(express.urlencoded({limit: '50mb'}));



  http.listen(3000, () => {
    console.log('listening on *:3000');
  });










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

app.get('/GetContainers', (req, res) => {
    api.getContainers(client, res);
});

app.get('/GetShips', (req, res) => {
    api.getShips(client, res);
});
app.get('/getShipData', (req, res) => {
    api.getShipData(client, req.query.shipData, res);
});


app.get('/GetOneWorkersLogin', function(req, res) {

    api.getOneWorkersLogin(client, req.query.workers, res);

});
app.get('/GetOneMailLogin', function(req, res) {

    api.getOneMailLogin(client, req.query.workers, res);

});
app.get('/getContainerId', function(req, res) {

    api.getContainerId(client, req.query.itemData, res);

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
app.post('/createMessage', function(req, res) {
    messageData=req.body.messageData;
    console.log(messageData);
    io.emit('message', messageData);
    api.createMessage(client, req.body.messageData, res);
    res.send("Save was successful!");
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
    //console.log( req.body.shipData);
    api.createShip(client, req.body.shipData, res);
    res.send("Save was successful!");
});
app.post('/updateWorkers', function(req, res) {

    api.updateWorkers(client, req.body.editWorkers, res);
    res.send("Update was successful!");
});
app.post('/updateWorkerStatus', function(req, res) {

    api.updateWorkerStatus(client, req.body.statusData, res);
    res.send("Update was successful!");
});
app.post('/updateShip', function(req, res) {

    api.updateShip(client, req.body.containerData, res);
    res.send("Update was successful!");
});
app.delete('/deleteOneWorker', function(req, res) {

    api.deleteWorker(client, req.body.editWorkers, res);
    res.send("Update was successful!");
});