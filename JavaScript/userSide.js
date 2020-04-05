let userAdded = new Array();
let createUser = new Array();


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

function validatePassword(pass,rePass) {
    let psw = pass.length;
    if (psw < 6) {
        alert("The length of password is too small."); //litera mare si o cifra, parola este egala cu cea de a doua
    }else { 
    let contorPass=false;
        if(pass==rePass){
            contorPass=true;
        
             let  contorBigCaracter=false;
             let  contorNumber=false;
            for(i=0;i<pass.length;i++){

                if(pass[i]>='A' && pass[i]<='Z'){
                    contorBigCaracter=true;
                }else{
                    if(i+1==pass.length && contorBigCaracter==false){
                    alert("The password don't have big caracter. A-Z");
                }
                }
                if(pass[i]>='0' && pass[i]<='9'){
                    contorNumber=true;
                }else{ if(i+1==pass.length && contorNumber==false){
                    alert("The password don't have number. 0-9");
                    }
                }
                if(contorBigCaracter==true && contorNumber==true && contorPass==true){
                   i=pass.length;
                return 1;
                }
            }
        }else{
            alert("The reentered password is not equel.");
        }
    }
}

function valdiCNP(cNP){

    if(cNP.length<13){
        alert("The length of CNP is too small.");
    }else if( cNP.length>13){
        alert("The length of CNP is too long.");
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


function getOneUserUsername(createUser){
    existentUser=new Array;
    $.ajax({
        type: "GET",
        url: "/GetOneUserUsername",
        data: { createUser: createUser },
        success: function(data) {
            existentUser=data;
            console.log(existentUser);
        }
    });
    return existentUser;
}

function CheckCNP(variableCheckCNP){
    existentUser=new Array;
    $.ajax({
        type: "GET",
        url: "/GetOneUserCNP",
        data: { variableCheckCNP: variableCheckCNP },
        success: function(data) {
            existentUser=data;
            console.log(existentUser);

         
        }
    });
    return existentUser;
}

function CheckMail(createUser){
    existentUser=new Array;
    $.ajax({
        type: "GET",
        url: "/GetOneUserEmail",
        data: { createUser: createUser },
        success: function(data) {
            existentUser=data;
            console.log(existentUser);

            if(existentUser==null){
              return true;
            }else{
                alert("The CNP is is already existing!");
                return false;
            }
        }
    });
    return existentUser;
}




$("#createUser").click(function(e) {
    e.preventDefault();
     createUser[0] = document.getElementById("firstname").value;
     createUser[1] = document.getElementById("lastname").value;
     createUser[2] = document.getElementById("cnp").value;
     createUser[3] = document.getElementById("userName").value;
     createUser[4] = document.getElementById("inputEmail").value;
     createUser[5] = document.getElementById("inputPassword").value;
     createUser[6] = document.getElementById("reenterPass").value;


    //------Validare comentata pentru a testa mai usor------

     console.log(createUser);
     valdiCNP(createUser[2]);



     if(CheckCNP(createUser[2])==null){
         console.log("Nu exista");
     }else{
        console.log("Exista");
     }
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
}
   // console.log(firstname + " " + lastname + " " + cnp);
});