let userAdded = new Array();
let createUser = new Array();
userAdded[0] = "0";
userAdded[1] = "0";
// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "/updateTable",
//         success: function (data) {
//             for (i = 0; i < data.length; i++) {
//                 makeTable(data[i].x, data[i].y, data[i].nr);
//             }
//         }
//     });
//     reDrawTables();
// });
function getUsers() {

    $.ajax({
        type: "GET",
        url: "/GetUser",
        success: function(data) {
            for (i = 0; i < data.length; i++) {
                console.log(data[i]);
            }
        }
    });

    //console.log(userAdded);

}

function SaveUser() {
    userAdded[0] = document.getElementById("idUser").value;
    userAdded[1] = document.getElementById("userPassword").value;
    // $.ajax({
    //     type: "POST",
    //     url: "/SaveUser",
    //     data: {user:userAdded},
    //     success: function(data) {
    //        // console.log(data);
    //     }
    // });
}

function createUserFunction() {
    createUser[0] = document.getElementById("firstName").value;
    createUser[1] = document.getElementById("secondName").value;
    createUser[2] = document.getElementById("userEmail").value;
    createUser[3] = document.getElementById("vehicle").value;
    createUser[4] = document.getElementById("createPsw").value;
    createUser[5] = document.getElementById("re-enterPsw").value;

    validatePassword(createUser[4]);

    // if (createUser[4] != createUser[5]) {
    //     alert("Password does not match.");
    // }



    $.ajax({
        type: "POST",
        url: "/createUser",
        data: { user: createUser },
        success: function(data) {
            // console.log(data);
        }
    });

    console.log(createUser);
}

function validatePassword(pass) {
    let psw = pass.length;
    console.log(psw);
    if (psw < 6) {
        alert("The length is too small.");
    }
}


function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
}

function errorFunc(error) {
    console.log(error);
}

//myCursor.forEach(iterateFunc, errorFunc);

$("#createUser").click(function(e) {
    e.preventDefault();
     createUser[0] = document.getElementById("firstname").value;
     createUser[1] = document.getElementById("lastname").value;
     createUser[2] = document.getElementById("cnp").value;
     createUser[3] = document.getElementById("userName").value;
     createUser[4] = document.getElementById("inputEmail").value;
     createUser[5] = document.getElementById("inputPassword").value;
     createUser[6] = document.getElementById("reenterPass").value;

    $.ajax({
        type: "POST",
        url: "/createUser",
        data: { user: createUser },
        success: function(data) {
             console.log(data);
        }
    });
    console.log(firstname + " " + lastname + " " + cnp);
});