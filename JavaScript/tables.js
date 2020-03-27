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
        alert("The length is too small."); //litera mare si o cifra, parola este egala cu cea de a doua
    }else {
        
    }
}

function valdiCNP(cNP){

    let cnpLength=cNP.length;
    if(cNP.length<13){
        alert("The length is too small.");
    }else if( cNP.length>13){
        alert("The length is too long.");
    }else{
        birthDay(cNP);
    }

}

function birthDay(cNP){
    let sex="";
    let foreign="";
    let totalbirthDaySum="";
if(cNP[0]=='0' || cNP[0]=='9'){
    alert("The CNP is incorect.");
}else{ 

    if(cNP[0]=='7' || cNP[0]=='8'){
        foreign="Strain";

    
    if(parseInt(cNP[0])%2==1){
        sex="Masculin";
        }else{
        sex="Feminin";
        }
        createUser[7] =foreign ;
        createUser[8] =sex ;
    }
    else{

     let totalbirthDay=cNP;
   
     
   let year=totalbirthDay[1]+totalbirthDay[2];
   let mounth=totalbirthDay[3]+totalbirthDay[4];
   let day=totalbirthDay[5]+totalbirthDay[6];
   let sex="";
        if(cNP[0]=='1' || cNP[0]=='2'){
            totalbirthDaySum="19"+year+"."+mounth+"."+day;
        }else if(cNP[0]=='5' || cNP[0]=='6'){
            totalbirthDaySum="20"+year+"."+mounth+"."+day;
        }

        if(parseInt(cNP[0])%2==1){
        sex="Masculin";
        }else{
        sex="Feminin";
        }
        createUser[7] =totalbirthDaySum ;
        createUser[8] =sex ;
   }
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


   
     valdiCNP(createUser[2]);

    $.ajax({
        type: "POST",
        url: "/createUser",
        data: { user: createUser },
        success: function(data) {
             console.log(data);
        }
    });
   // console.log(firstname + " " + lastname + " " + cnp);
});