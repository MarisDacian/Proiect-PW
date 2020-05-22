loginWorkersInfo=new Array();
dateArray=new Array();
statusData=new Array();
var socket = io();
window.onload = function(){
  loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));
  this.console.log(loginWorkersInfo);
  fetch('http://worldclockapi.com/api/json/utc/now')
  .then(function(res){
    
  return res.json();
  })
  .then(function(json){
  dateArray=json.currentDateTime;
  console.log(dateArray);
  
  })
  .catch((error) => {
  console.log('Looks like there was a problem: \n', error);
 });
 statusData[0]=loginWorkersInfo[0]._id;
 statusData[1]="working";
 statusData[2]=dateArray;
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
  
  socket.on('message', (messageData) => {
      var ids=messageData[3];
      
      ids=ids.split(" ");
      for(i=0;i<ids.length;i++){
      if(loginWorkersInfo[0]._id==ids[i]||ids[i]=="all")
        {
          console.log(messageData[0]);
          console.log(messageData[1]);
          console.log(messageData[2]);
        }
      }
  });
 

//////////////////////////
// if (!!window.EventSource) {
//     var source = new EventSource('/countdown')

//     source.addEventListener('message', function(e) {
//       try{
//   var res = e.data.split(",");
//   var ids=res[3];
//   ids=ids.split(" ");
//   for(i=0;i<ids.length;i++){
//     if(loginWorkersInfo[0]._id==ids[i])
//     {
//       console.log(res[0]);
//       console.log(res[1]);
//       console.log(res[2]);
//     }
//   }

 
     // TODO PENTRU MATE
    //  aici trebuie verificat daca mesajul primit este pentru userul curent (pe pozitia 3 ai "all" daca e pt toti userii
    //  sau _id urile din baza de date daca e pt anumiti useri, trb sa verifici daca userul curent trebuie sa primeasca
    // mesajul)

    //TODO PENTRU OANA
    //odata ce mate afla daca mesajul e pt userul curent vreau sa faci un fel de banner sau ceva similar prin care sa afisezi mesajul primit
  //   }, false)

  //   source.addEventListener('open', function(e) {
  //       console.log("Connected");
  //   }, false)
  //   source.addEventListener('error', function(e) {
  //     const id_state = document.getElementById('state')
  //     if (e.eventPhase == EventSource.CLOSED)
  //       source.close()
  //     if (e.target.readyState == EventSource.CLOSED) {
  //       console.log("Disconnected");
  //     }
  //     else if (e.target.readyState == EventSource.CONNECTING) {
  //       console.log("Connecting...");
  //     }
  //   }, false)
  // } else {
  //   console.log("Your browser doesn't support SSE")
  // }
  /////////////////////
if(loginWorkersInfo!=null){
    console.log(loginWorkersInfo);
}else{
//++++++++++++++++Comentat pe motiv de lucru A nu se sterge!!!!!!!++++++++++++++++++++++++++++++++++++++++++
//window.location= "http://localhost:3000";
    console.log("Nu se poate");
}


