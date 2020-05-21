loginWorkersInfo=new Array();

loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));

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
  /////////////////////
if(loginWorkersInfo!=null){
    console.log(loginWorkersInfo);
}else{
//++++++++++++++++Comentat pe motiv de lucru A nu se sterge!!!!!!!++++++++++++++++++++++++++++++++++++++++++
//window.location= "http://localhost:3000";
    console.log("Nu se poate");
}
