
let createShip = new Array();
 // if user is running mozilla then use it's built-in WebSocket
 window.WebSocket = window.WebSocket || window.MozWebSocket;

 var connection = new WebSocket('ws://127.0.0.1:1337');

 connection.onopen = function () {
   // connection is opened and ready to use
 };

 connection.onerror = function (error) {
   // an error occurred when sending/receiving data
 };

 connection.onmessage = function (message) {
   // try to decode json (I assume that each message
   // from server is json)
   try {
     var json = JSON.parse(message.data);
   } catch (e) {
     console.log('This doesn\'t look like a valid JSON: ',
         message.data);
     return;
   }
   console.log(message.data);
 };
function insertShipToBd(shipData) {
    var result;
    console.log(shipData);
    $.ajax({
        type: "POST",
        url: "/createShip",
        data: { shipData: shipData },
        success: function(data) {
            result = data;
        }
    });
    return result;
}
async function addShip(shipData) {
    console.log(shipData);
        let promise = new Promise((res) => {
            res(insertShipToBd(shipData));
    
        });
        ExistContor = 0;
        let result = await promise;
    
    }
$("#createShip").click(async function(e) {
    e.preventDefault();
    createShip[0] = document.getElementById("boatName").value;
    createShip[1] = document.getElementById("captainName").value;
    createShip[2] = document.getElementById("weightBoat").value;
    createShip[3] = document.getElementById("teu").value;
    createShip[4] = document.getElementById("bay").value;
    addShip(createShip);

    

});