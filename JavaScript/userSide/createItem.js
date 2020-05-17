
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
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
async function addItem(itemData) {

    let promise = new Promise((res) => {
        res(insertItemToBd(itemData));

    });
    ExistContor = 0;
    let result = await promise;

}
$("#createItem").click(async function(e) {
    e.preventDefault();
    createItem[0] = document.getElementById("containerType").value;
    createItem[1] = document.getElementById("Weight").value;
    createItem[2] = document.getElementById("LocationFrom").value;
    createItem[3] = document.getElementById("LocationTo").value;
    createItem[4] =parseInt(getRandomArbitrary(100000,999999));
    addItem(createItem);

    

});