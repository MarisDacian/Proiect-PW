let userAdded = new Array();
let createWorkers = new Array();
let loginWorkersInfo = new Array();
let userData = new Array();
//////////////////////////
if (!!window.EventSource) {
    var source = new EventSource('/countdown')

    source.addEventListener('message', function(e) {
     console.log(e.data);
    }, false)

    source.addEventListener('open', function(e) {
        console.log("Connected");
    }, false)

    source.addEventListener('error', function(e) {
      const id_state = document.getElementById('state')
      if (e.eventPhase == EventSource.CLOSED)
        source.close()
      if (e.target.readyState == EventSource.CLOSED) {
        console.log("Disconnected");
      }
      else if (e.target.readyState == EventSource.CONNECTING) {
        console.log("Connecting...");
      }
    }, false)
  } else {
    console.log("Your browser doesn't support SSE")
  }
  ///////////////////////
function getWorkers() {

    $.ajax({
        type: "GET",
        url: "/GetWorkers",
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


function stringRecognition(theString) {


    var n = theString.indexOf("@");
    var m = theString.indexOf(".");

    if (n != -1 && m != -1) {
        return 1;
    } else {
        if (theString.length == 13 && theString.match(/^[0-9]+$/) != null) {

            return 2;

        } else {
            return 3;
        }
    }

}



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
            createWorkers[7] = foreign;
            createWorkers[8] = sex;
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

            createWorkers[7] = totalbirthDaySum;
            createWorkers[8] = sex;
        }


        if (parseInt(cNP[0]) % 2 == 1) {
            sex = "Masculin";
        } else {
            sex = "Feminin";
        }
        createWorkers[7] = totalbirthDaySum;
        createWorkers[8] = sex;
    }
}

async function CheckCNP(createUser) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneWorkersCNP",
            data: { createUser: createUser },
            success: function(data) {
                setTimeout(500);
                res(data);
            }
        });
    });
    let result;

    result = await promise;
    return result;
}


async function CheckMail(createUser) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneWorkersEmail",
            data: { createUser: createUser },
            success: function(data) {
                setTimeout(500);
                res(data);
            }
        });
    });
    let result;

    result = await promise;
    return result;
}

async function getOneWorkersUsername(createUser) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneWorkersUsernameOnly",
            data: { createUser: createUser },
            success: function(data) {
                setTimeout(500);
                res(data);
            }
        });
    });
    let result;

    result = await promise;
    return result;
}
async function firstAsync(createWorkers) {
    let promise1 = new Promise((res) => {
        res(CheckCNP(createWorkers));

    });
    let promise2 = new Promise((res) => {
        res(CheckMail(createWorkers));

    });
    let promise3 = new Promise((res) => {
        res(getOneWorkersUsername(createWorkers));

    });
    ExistContor = 0;
    let result1 = await promise1;
    console.log(result1);
    let result2 = await promise2;
    console.log(result2);
    let result3 = await promise3;
    console.log(result3);
    if (result1[0] != null) {
        ExistContor = 1;
        alert("The CNP alredy exist");
    }

    if (result2[0] != null) {
        ExistContor = 1;
        alert("The Mail alredy exist");
    }


    if (result3[0] != null) {
        ExistContor = 1;
        alert("The Username alredy exist");
    }
    if (ExistContor != 1) {
        if (valdiCNP(createWorkers[2]) != 1) {
            if (validatePassword(createWorkers[5], createWorkers[6]) == 1) {
                console.log(createWorkers);
                $.ajax({
                    type: "POST",
                    url: "/createWorkers",
                    data: { user: createWorkers },
                    success: function(data) {
                        console.log(data);
                    }
                });
            }
        }
    }
}

async function GetOneWorkersLogin(workers) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneWorkersLogin",
            data: { workers: workers },
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

async function GetOneMailLogin(workers) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneMailLogin",
            data: { workers: workers },
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

async function GetOneCNPLogin(workers) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneCNPLogin",
            data: { workers: workers },
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


let userFound = false;
async function GetOneWorkersInfo(WorkersInfo) {
    let promise = new Promise((res, rej) => {
        $.ajax({
            type: "GET",
            url: "/GetOneWorkersInfo",
            data: { WorkersInfo: WorkersInfo },
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

async function searchByCnp(cnp) {
    let promise = new Promise((res) => {
        res(GetOneWorkersInfo(cnp));

    });
    ExistContor = 0;
    let result = await promise;
    console.log(result);
    userData = result;
    oldData();
}

function oldData() {
    let aux = userData[0];
    if (aux != undefined) {
        document.getElementById("editFirstName").value = aux.firstName;
        document.getElementById("editLastName").value = aux.lastName;
        document.getElementById("editCNP").value = aux.cnp;
        document.getElementById("editUserName").value = aux.userName;
        document.getElementById("editEmail").value = aux.email;
        document.getElementById("editPassword").value = aux.password;
    }
}

function updateWorkers(editWorkers) {
    var result;
    $.ajax({
        type: "POST",
        url: "/updateWorkers",
        data: { editWorkers: editWorkers },
        success: function(data) {
            result = data;
        }
    });
    return result;
}



async function loginWorkers(workers) {

    let promise = new Promise((res) => {
        res(GetOneWorkersLogin(workers));

    });
    ExistContor = 0;
    let result = await promise;
    console.log(result);
    loginWorkersInfo = result;
    console.log(loginWorkersInfo);

    ///////Pentru Mate\\\\\\\\\
    if(loginWorkersInfo[0].userName!=null){
        sessionStorage.setItem("loginData", JSON.stringify(loginWorkersInfo));
    window.location= "http://localhost:3000/Workers";

    }
}



async function loginWorkersMail(workers) {

    let promise = new Promise((res) => {
        res(GetOneMailLogin(workers));

    });
    ExistContor = 0;
    let result = await promise;
    console.log(result);
    loginWorkersInfo = result;
    console.log(loginWorkersInfo);

}

async function loginWorkersCNP(workers) {

    let promise = new Promise((res) => {
        res(GetOneCNPLogin(workers));

    });
    ExistContor = 0;
    let result = await promise;
    console.log(result);
    loginWorkersInfo = result;
    console.log(loginWorkersInfo);

}



function deleteOneWorker(editWorkers) {
    var result;
    $.ajax({
        type: "DELETE",
        url: "/deleteOneWorker",
        data: {editWorkers:editWorkers},
        success: function(data) {
            result = data;
        }
    });
    console.log(result);
    return result;
}
$("#saveNewData").click(function(e) {
    e.preventDefault();
    let aux;
    userData[0].firstName = document.getElementById("editFirstName").value;
    userData[0].lastName = document.getElementById("editLastName").value;
    userData[0].cnp = document.getElementById("eCNP").value;
    userData[0].userName = document.getElementById("editUserName").value;
    userData[0].email = document.getElementById("editEmail").value;
    userData[0].password = document.getElementById("editPassword").value;
    aux = userData[0];
    updateWorkers(aux);
});

$("#editFName").click(function(e) {
    e.preventDefault();
    document.getElementById("editFirstName").disabled = false;
});

$("#editLName").click(function(e) {
    e.preventDefault();
    document.getElementById("editLastName").disabled = false;
});

$("#editCNP").click(function(e) {
    e.preventDefault();
    document.getElementById("eCNP").disabled = false;
});

$("#editUName").click(function(e) {
    e.preventDefault();
    document.getElementById("editUserName").disabled = false;
});

$("#editMail").click(function(e) {
    e.preventDefault();
    document.getElementById("editEmail").disabled = false;
});

$("#editPass").click(function(e) {
    e.preventDefault();
    document.getElementById("editPassword").disabled = false;
});

$("#searchUserBtn").click(function(e) {
    e.preventDefault();
    let v = document.getElementById("searchUserInfo").value;
    if (v != "") {
        document.getElementById("saveNewData").disabled = false;
        document.getElementById("deleteUser").disabled = false;
    } else {
        document.getElementById("errorBox").style.removeProperty('display');
    }
    //mai trebuie sa verific si sa afisez mesaj de eroare daca CNP-ul introdus nu exista
});

$("#searchUserBtn").click(async function(e) {
    e.preventDefault();
    searchByCnp(document.getElementById("searchUserInfo").value);

});
$("#logInButton").click(function(e) {
    e.preventDefault();
    let aux = new Array;
    aux[0] = document.getElementById("user").value;
    aux[1] = document.getElementById("exampleDropdownFormPassword1").value;

    if (stringRecognition(aux[0]) == 1) {
        loginWorkersMail(aux);
    }
    if (stringRecognition(aux[0]) == 2) {
        loginWorkersCNP(aux);
    }
    if (stringRecognition(aux[0]) == 3) {
        loginWorkers(aux);
    }


});

$("#createUser").click(async function(e) {
    e.preventDefault();
    createWorkers[0] = document.getElementById("firstname").value;
    createWorkers[1] = document.getElementById("lastname").value;
    createWorkers[2] = document.getElementById("cnp").value;
    createWorkers[3] = document.getElementById("userName").value;
    createWorkers[4] = document.getElementById("inputEmail").value;
    createWorkers[5] = document.getElementById("inputPassword").value;
    createWorkers[6] = document.getElementById("reenterPass").value;

    firstAsync(createWorkers);

});

$("#deleteUser").click(function(e) {
    e.preventDefault();


    userData[0] = document.getElementById("editEmail").value;
    console.log(userData);
    deleteOneWorker(userData);

   

});

