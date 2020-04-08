let userAdded = new Array();
let createUser = new Array();
let loginUser=new Array();
let userData=new Array();
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

function validatePassword(pass, rePass) {
    let psw = pass.length;
    if (psw < 6) {
        alert("The length of password is too small."); //litera mare si o cifra, parola este egala cu cea de a doua
    } else {
        let contorPass = false;
        if (pass == rePass) {
            contorPass = true;

            let contorBigCaracter = false;
            let contorNumber = false;
            for (i = 0; i < pass.length; i++) {

                if (pass[i] >= 'A' && pass[i] <= 'Z') {
                    contorBigCaracter = true;
                } else {
                    if (i + 1 == pass.length && contorBigCaracter == false) {
                        alert("The password don't have big caracter. A-Z");
                    }
                }
                if (pass[i] >= '0' && pass[i] <= '9') {
                    contorNumber = true;
                } else {
                    if (i + 1 == pass.length && contorNumber == false) {
                        alert("The password don't have number. 0-9");
                    }
                }
                if (contorBigCaracter == true && contorNumber == true && contorPass == true) {
                    i = pass.length;
                    return 1;
                }
            }
        } else {
            alert("The reentered password is not equel.");
        }
    }
}


function stringRecognition(theString){


    var n = theString.indexOf("@");
    var m = theString.indexOf(".");

    if(n!=-1 || m!=-1){
         console.log("Este email");
    }else{
            if(theString.length==13 && theString.match(/^[0-9]+$/) != null){

                console.log("Este CNP");

            }else{
                console.log("Este Username");
            }
    }

}

stringRecognition("MAta@gmail.com");

function valdiCNP(cNP) {

    if (cNP.length < 13) {
        alert("The length of CNP is too small.");
        return 1;
    } else if (cNP.length > 13) {
        alert("The length of CNP is too long.");
        return 1;
    } else {
        birthDay(cNP);
    }

}

function birthDay(cNP) {
    let sex = "";
    let foreign = "";
    let totalbirthDaySum = "";
    if (cNP[0] == '0' || cNP[0] == '9') {
        alert("The CNP is incorect.");
    } else {

        if (cNP[0] == '7' || cNP[0] == '8') {
            foreign = "Strain";


            if (parseInt(cNP[0]) % 2 == 1) {
                sex = "Masculin";
            } else {
                sex = "Feminin";
            }
            createUser[7] = foreign;
            createUser[8] = sex;
        } else {

            let totalbirthDay = cNP;


            let year = totalbirthDay[1] + totalbirthDay[2];
            let mounth = totalbirthDay[3] + totalbirthDay[4];
            let day = totalbirthDay[5] + totalbirthDay[6];
            let sex = "";
            if (cNP[0] == '1' || cNP[0] == '2') {
                totalbirthDaySum = "19" + year + "." + mounth + "." + day;
            } else if (cNP[0] == '5' || cNP[0] == '6') {
                totalbirthDaySum = "20" + year + "." + mounth + "." + day;
            }

            createUser[7] = totalbirthDaySum;
            createUser[8] = sex;
        }

        
        if (parseInt(cNP[0]) % 2 == 1) {
            sex = "Masculin";
        } else {
            sex = "Feminin";
        }
        createUser[7] =totalbirthDaySum ;
        createUser[8] =sex ;
        console.log(sex);
   }
 } 

async function CheckCNP(createUser){
    let promise = new Promise((res,rej) => {
    $.ajax({
        type: "GET",
        url: "/GetOneUserCNP",
        data: { createUser: createUser },
        success: function(data) {
            setTimeout(500);     
            console.log(data);
            res(data);
        }
    });
});
let result;

 result = await promise;
console.log(result);
    return result;
}


async function CheckMail(createUser){
    let promise = new Promise((res,rej) => {
    $.ajax({
        type: "GET",
        url: "/GetOneUserEmail",
        data: { createUser: createUser },
        success: function(data) {
            setTimeout(500);     
            console.log(data);
            res(data);
        }
    });
});
let result;

 result = await promise;
console.log(result);
    return result;
}

async function getOneUserUsername(createUser) {
    let promise = new Promise((res,rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneUserUsernameOnly",
            data: { createUser: createUser },
            success: function(data) {
                setTimeout(500);     
                console.log(data);
                res(data);
            }
        });
    });
    let result;
    
     result = await promise;
    console.log(result);
        return result;
}
async function firstAsync(createUser) {
    let promise1 = new Promise((res) => {
        res(CheckCNP(createUser));
      
    });
    let promise2 = new Promise((res) => {
        res(CheckMail(createUser));
       
    });
    let promise3 = new Promise((res) => {
        res(getOneUserUsername(createUser));
       
    });
    ExistContor=0;
    let result1 = await promise1; 
    console.log(result1);
    let result2 = await promise2; 
    console.log(result2);
    let result3 = await promise3; 
    console.log(result3);
    if(result1[0]==null){
        console.log("Nu exista1");
    }else{
        console.log(result1);
       console.log("Exista1");
       ExistContor=1;
       alert("The CNP alredy exist");
    }
 
    
    if(result2[0]==null){
        console.log("Nu exista2");
    }else{
        console.log(result2);
       console.log("Exista2");
       ExistContor=1;
       alert("The Mail alredy exist");
    }


    if(result3[0]==null){
        console.log("Nu exista3");
    }else{
        console.log(result3);
       console.log("Exista3");
       ExistContor=1;
       alert("The Username alredy exist");
    }

    if( ExistContor!=1){
    if(valdiCNP(createUser[2])!=1){
     if(validatePassword(createUser[5],createUser[6])==1){
       console.log(createUser);
        $.ajax({
            type: "POST",
            url: "/createUser",
            data: { user: createUser },
            success: function(data) {
                    console.log(data);
            }
        });
    }  } }
}

function GetOneUserLogin(loginUser)
{
var result;
    $.ajax({
        type: "GET",
        url: "/GetOneUserLogin",
        data: { loginUser: loginUser },
        success: function(data) {
           
            console.log(data);
            result=data;
        }
    });
console.log(result);
    return result;
}


        
let userFound=false;
async function GetOneUserInfo(userInfo){
    let promise = new Promise((res,rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneUserInfo",
            data: { userInfo: userInfo },
            success: function(data) {
                setTimeout(500);     
                console.log(data);
                res(data);
            }
        });
    });
    let result;
    
     result = await promise;
    console.log(result);
        return result;
}

//**pentru Oana**\\
//daca vrei sa prelucrezi variabilele din server
//lucra doar in functia searchByCnp
async function searchByCnp(cnp)
{
    let promise = new Promise((res) => {
        res(GetOneUserInfo(cnp));
       
    });
    ExistContor=0;
    let result = await promise; 
    console.log(result);
    userData=result;
    let aux=userData[0];
    console.log(aux.cnp);//asa accesezi parametrii din variabila   
}
$("#searchUserBtn").click(async function(e) {
    e.preventDefault();
   searchByCnp(document.getElementById("searchUserInfo").value);
        
});
$("#logInButton").click(function(e) {
    e.preventDefault();
    loginUser[0] = document.getElementById("user").value;
    loginUser[1] = document.getElementById("exampleDropdownFormPassword1").value;
    getOneUserUsername(loginUser);
   
});

$("#createUser").click(async function(e) {
    e.preventDefault();
    createUser[0] = document.getElementById("firstname").value;
    createUser[1] = document.getElementById("lastname").value;
    createUser[2] = document.getElementById("cnp").value;
    createUser[3] = document.getElementById("userName").value;
    createUser[4] = document.getElementById("inputEmail").value;
    createUser[5] = document.getElementById("inputPassword").value;
    createUser[6] = document.getElementById("reenterPass").value;

     firstAsync(createUser);
    
});