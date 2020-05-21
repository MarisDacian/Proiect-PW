loginWorkersInfo=new Array();

loginWorkersInfo=JSON.parse(sessionStorage.getItem("loginData"));

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
