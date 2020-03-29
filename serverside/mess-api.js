const get = require('./requests/getRequests');
const post = require('./requests/postRequests');
const del = require('./requests/deleteRequests');

module.exports={

    getRestaurantSeats: function(client,res){
        get.getRestaurantSeats(client,res);
    },


    createUser: function(client,obj,res){
        /**to add save seats functionality */
        post.createUser(client,obj);
    },
    getUsers: function(client,obj,res){
        /**to add save seats functionality */
        get.getUsers(client,obj);
    },
    getOneUser: function(client,obj,res){
        /**to add save seats functionality */
        get.getOneUser(client,obj,res);
    },
   
}