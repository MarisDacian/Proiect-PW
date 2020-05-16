loginWorkersInfo=new Array();

loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));

if(loginWorkersInfo!=null){
    
    console.log(loginWorkersInfo);

    
}else{
    console.log("Nu se poate");
}
