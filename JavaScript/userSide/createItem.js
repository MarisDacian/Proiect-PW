
let createItem = new Array();

function insertItemToBd(itemData) {
    var result;
    $.ajax({
        type: "POST",
        url: "/createItem",
        data: { itemData: itemData },
        success: function(data) {
            result = data;
        }
    });
    return result;
}

async function addItem(itemData) {

    let promise = new Promise((res) => {
        res(insertItemToBd(itemData));

    });
    ExistContor = 0;
    let result = await promise;

}
const url = 'wss://localhost:8080'
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('hey') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}
$("#createItem").click(async function(e) {
    e.preventDefault();
    createItem[0] = document.getElementById("containerType").value;
    createItem[1] = document.getElementById("Weight").value;
    createItem[2] = document.getElementById("LocationFrom").value;
    createItem[3] = document.getElementById("LocationTo").value;
    addItem(createItem);

    

});