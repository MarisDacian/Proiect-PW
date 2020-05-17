module.exports = {

    createWorkers: function(client,data){
        const collection = client.db("PortDB").collection("Users");	
           
                collection.insertOne({  
                    firstName:data[0],
                    lastName:data[1],
                    cnp:data[2],
                    userName:data[3],
                    email:data[4],
                    password:data[5],
                    birthday:data[7],
                    sex:data[8],
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('User created');
                });
    },
    createMessage: function(client,data){
        const collection = client.db("PortDB").collection("Messages");	
           
                collection.insertOne({  
                    message:data[0],
                    time:data[1],
                    data:data[2],
                    users:data[3]
                    
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('Message created');
                });
    },
    updateWorkers: function(client,data,res){
        const collection = client.db("PortDB").collection("Users");	
        console.log(data);
        var ObjectId = require('mongodb').ObjectId; 
        var whichOne = { _id :new ObjectId(data._id) };
         var newdata = { $set: { firstName:data.firstName ,
            lastName: data.lastName,cnp:data.cnp ,
            userName: data.userName,email:data.email ,
            password: data.password} };
            console.log(newdata);
         collection.updateOne( whichOne, newdata, function(err){
            if(err)
                throw err;
            else{
                console.log("User was updated!");
            }
        });
    },

    createShip: function(client,data){
        const collection = client.db("PortDB").collection("Ships");	
        console.log(data);
                collection.insertOne({  
                    BoatName:data[0],
                    CaptainName:data[1],
                    BoatWeight:data[2],
                    NumberOfTeu:data[3],
                    NumberOfBay:data[4],
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('Ship created');
                });


    },
    createItem: function(client,data){
        const collection = client.db("PortDB").collection("Containers");	
        console.log(data);
                collection.insertOne({  
                    //Aici trb specificat ce incarcam

                     containerType:data[0],
                     Weight:data[1],
                     LocationFrom:data[2],
                     LocationTo:data[3],  
                    
                     
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('Item created');
                });


    },

}