
let createItem = new Array();
async function itemAsync(createItem) {
    let ok=false;
    
    while(!ok){
    createItem[4] =parseInt(getRandomArbitrary(100000,999999));
    let promise = new Promise((res) => {
        res(CheckId(createItem));

    });
   
    ExistContor = 0;
    let result = await promise;
    console.log(result);
    if(result==null)
        ok=true;

}
    addItem(createItem);
    
    
}
function CheckId(itemData) {
    var result;
    $.ajax({
        type: "GET",
        url: "/getContainerId",
        data: { itemData: itemData },
        success: function(data) {
            result = data;
        }
    });
    return result;
}
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
    createItem[0] =document.getElementById("containerType").value;
    createItem[1] = document.getElementById("Weight").value;
    createItem[2] = document.getElementById("LocationFrom").value;
    createItem[3] = document.getElementById("LocationTo").value;
    
    itemAsync(createItem);
});
//++++++++++++++++++++++ Mate o lucrat a nu se sterge +++++++++++++++++++++++++++
/*
function getRandomInt(max) {
    let x;
    x = Math.floor(Math.random() * Math.floor(max + 1)) + 5;

    return x;

}

function random() {


    let x = getRandomInt(20);

    return x;
}


function randomLocation() {

    x = Math.floor(Math.random() * Math.floor(4 + 1)) + 5;

    let containerLocation = 'New Yorker';
    if (x == 5) {
        containerLocation = 'Chicago';
    }
    if (x == 6) {
        containerLocation = 'Constanta';
    }
    if (x == 7) {
        containerLocation = 'Hon Kong';
    }
    if (x == 8) {
        containerLocation = 'Rijeka';
    }
    if (x == 9) {
        containerLocation = 'Monaco';
    }

return containerLocation;
}*/
 
function getContainers() {

    $.ajax({
        type: "GET",
        url: "/GetContainers",
        success: function(data) {
           
            for (i = 0; i < data.length; i++) {
              console.log(data[i]);
            }
        }
    });

}
//getContainers();