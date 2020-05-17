loginWorkersInfo=new Array();

loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));

if(loginWorkersInfo!=null){
    console.log(loginWorkersInfo);
}else{
window.location= "http://localhost:3000";
    console.log("Nu se poate");
}
