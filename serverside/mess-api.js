const get = require('./requests/getRequests');
const post = require('./requests/postRequests');
const del = require('./requests/deleteRequests');

module.exports={

    createUser: function(client,obj,res){
        /**to add save seats functionality */
        post.createUser(client,obj);
    },
    updateUser: function(client,obj,res){
        /**to add save seats functionality */
        post.updateUser(client,obj);
    },
    getUsers: function(client,obj,res){
        /**to add save seats functionality */
        get.getUsers(client,obj);
    },
    getOneUserLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserLogin(client,obj,res);
    },
    getOneMailLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneMailLogin(client,obj,res);
    },
    getOneCNPLogin: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneCNPLogin(client,obj,res);
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
    getOneUserInfo: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUserInfo(client,obj,res);
    },
   
}