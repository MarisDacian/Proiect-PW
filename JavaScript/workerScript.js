loginWorkersInfo=new Array();
dateArray=new Array();
var socket = io();
window.onload = function(){
  loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));
  this.console.log(loginWorkersInfo);
  fetch('http://worldclockapi.com/api/json/utc/now')
  .then(function(res){
    
  return res.json();
  })
  .then(function(json){
  dateArray=json;
  console.log(json);
  
  })
  .catch((error) => {
  console.log('Looks like there was a problem: \n', error);
 });
 statusData=new this.Array();
 statusData[0]=loginWorkersInfo[0]._id;
 statusData[1]="working";
 console.log(statusData);
 socket.emit('setWorkerStatus', statusData);
 //setWorkerStatus(statusData);

};

async function setWorkerStatus(statusData) {
  let promise = new Promise((res, rej) => {
      $.ajax({
          type: "POST",
          url: "/updateWorkerStatus",
          data: { statusData: statusData },
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

 window.beforeunload  = function(){
  
  statusData=new this.Array();
  statusData[0]=loginWorkersInfo[0]._id;
  statusData[1]="notWorking";
  console.log(statusData);
  setWorkerStatus(statusData);
    return 'Are you sure you want to leave?';
  };
  
  
 function MessageVerification(varable){
  const str = "The,quick,brown,fox,jumps,over,the,lazy,dog.";
  console.log(varable);

 //idtest="5e8e0a5df86a2f348880c019";
 const words = varable.split(',');
 console.log(words[3]);




 }
var testarr=["timp,eveniment,ceas,5e8e0a5df86a2f348780c019,5e8e0a5df86a2f348880c019,5e8e0a5df86a2f348880c009"];
 MessageVerification(testarr);
//////////////////////////
if (!!window.EventSource) {
    var source = new EventSource('/countdown')

    source.addEventListener('message', function(e) {
     console.log(e.data);
     // TODO PENTRU MATE
    //  aici trebuie verificat daca mesajul primit este pentru userul curent (pe pozitia 3 ai "all" daca e pt toti userii
    //  sau _id urile din baza de date daca e pt anumiti useri, trb sa verifici daca userul curent trebuie sa primeasca
    // mesajul)

    //TODO PENTRU OANA
    //odata ce mate afla daca mesajul e pt userul curent vreau sa faci un fel de banner sau ceva similar prin care sa afisezi mesajul primit
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
  /////////////////////
if(loginWorkersInfo!=null){
    console.log(loginWorkersInfo);
}else{
//++++++++++++++++Comentat pe motiv de lucru A nu se sterge!!!!!!!++++++++++++++++++++++++++++++++++++++++++
//window.location= "http://localhost:3000";
    console.log("Nu se poate");
}


