const get = require('./requests/getRequests');
const post = require('./requests/postRequests');
const del = require('./requests/deleteRequests');

module.exports={

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
    getWorkers: function(client,obj,res){
        /**to add save seats functionality */
        get.getWorkers(client,obj);
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