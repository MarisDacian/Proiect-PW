const get = require('./requests/getRequests');
const post = require('./requests/postRequests');
const del = require('./requests/deleteRequests');

module.exports={

    createUser: function(client,obj,res){
        /**to add save seats functionality */
        post.createUser(client,obj);
    },
    getUsers: function(client,obj,res){
        /**to add save seats functionality */
        get.getUsers(client,obj);
    },
    getOneUserUsername: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserUsername(client,obj,res);
    },
    getOneUserEmail: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserEmail(client,obj,res);
    },
    getOneUserCNP: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserCNP(client,obj,res);
    },
    getOneUserUsernameOnly: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserUsernameOnly(client,obj,res);
    },
   
}