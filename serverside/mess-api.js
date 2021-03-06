const get = require('./requests/getRequests');
const post = require('./requests/postRequests');
const del = require('./requests/deleteRequests');

module.exports={
    
    
    countdownFunc: function(client,obj,res){
        /**to add save seats functionality */
        get.countdownFunc(client,obj);
    },
    createMessage: function(client,obj,res){
        /**to add save seats functionality */
        post.createMessage(client,obj);
    },
    createWorkers: function(client,obj,res){
        /**to add save seats functionality */
        post.createWorkers(client,obj);
    },
    createItem: function(client,obj,res){
        /**to add save seats functionality */
        post.createItem(client,obj);
    },
    createShip: function(client,obj,res){
        /**to add save seats functionality */
        post.createShip(client,obj);
    },
    updateWorkers: function(client,obj,res){
        /**to add save seats functionality */
        post.updateWorkers(client,obj);
    },  
    updateWorkerStatus: function(client,obj,res){
        /**to add save seats functionality */
        post.updateWorkerStatus(client,obj);
    },
    updateWorkerStatusTime: function(client,obj,res){
        /**to add save seats functionality */
        post.updateWorkerStatusTime(client,obj);
    },
    updateShip: function(client,obj,res){
        /**to add save seats functionality */
        post.updateShip(client,obj);
    },
     getContainerId: function(client,obj,res){
        /**to add save seats functionality */
        get.getContainerId(client,obj,res);
    },
    getWorkers: function(client,obj,res){
        /**to add save seats functionality */
        get.getWorkers(client,obj);
    },
    getShipData: function(client,obj,res){
        /**to add save seats functionality */
        get.getShipData(client,obj,res);
    },
    getContainers: function(client,obj,res){
        /**to add save seats functionality */
        get.getContainers(client,obj);
    },
    getShips: function(client,obj,res){
        /**to add save seats functionality */
        get.getShips(client,obj);
    },
    getOneWorkersLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneWorkersLogin(client,obj,res);
    },
    getOneMailLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneMailLogin(client,obj,res);
    },
    getOneCNPLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneCNPLogin(client,obj,res);
    },
    getOneWorkersEmail: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneWorkersEmail(client,obj,res);
    },
    getOneWorkersCNP: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneWorkersCNP(client,obj,res);
    },
    getOneWorkersUsernameOnly: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneWorkersUsernameOnly(client,obj,res);
    },
    getOneWorkersInfo: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneWorkersInfo(client,obj,res);
    },
    deleteWorker: function(client,obj,res){
        /**to add save seats functionality */
        del.deleteWorker(client,obj,res);
    },
   
}