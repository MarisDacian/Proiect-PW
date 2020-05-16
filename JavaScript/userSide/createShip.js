
let createShip = new Array();
 
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