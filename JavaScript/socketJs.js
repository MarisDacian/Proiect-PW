var socket = io();
socket.on('connection', (socket) => {
});
socket.on('updateWorkerStatus', (statusData) => {
    receivedData =statusData;
    console.log(receivedData);
   
  });
