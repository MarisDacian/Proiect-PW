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
    updateWorkerStatus: function(client,data,res){
        const collection = client.db("PortDB").collection("Users");	
        console.log(data);
        var ObjectId = require('mongodb').ObjectId; 
        var whichOne = { _id :new ObjectId(data[0]) };
         var newdata = { $set: { status:data[1]} };
         collection.updateOne( whichOne, newdata, function(err){
            if(err)
                throw err;
            else{
                console.log("User was updated!");
            }
        });
    },
    updateWorkerStatusTime: async function(client,data,res){
        const collection = client.db("PortDB").collection("Users");	
       

        let totalTime;
        var ObjectId = require('mongodb').ObjectID;
        let promise = new Promise((res, rej) => {
        collection.find({ _id: ObjectId(data[0])} , { projection: {totalWorkedTime:1,} }).toArray(function(err, result) {
            if (err) throw err;
            res(result);
          });
        });
       
        totalTime = await promise;
        let aux=totalTime[0].totalWorkedTime;
        
          if(aux=="NaN")
          aux=0+parseInt(data[2],10);
          else
          aux=parseInt(aux,10)+parseInt(data[2],10);
          console.log(parseInt(data[2],10));
          aux+="";
        var whichOne = { _id :new ObjectId(data[0]) };
        
         var newdata = { $set: { status:data[1],sesionWorkedTime:data[2], totalWorkedTime:aux} };
         collection.updateOne( whichOne, newdata, function(err){
            if(err)
                throw err;
           
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
    updateShip: function(client,data,res){
        const collection = client.db("PortDB").collection("Ships");	
       // console.log(data);
        var ObjectId = require('mongodb').ObjectId; 
        var whichOne = { _id :new ObjectId(data[0]) };
         var newdata = { $set: { containerData:data[1]} };
         collection.updateOne( whichOne, newdata, function(err){
            if(err)
                throw err;
            else{
                console.log("User was updated!");
            }
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
                     id:data[4],   
                    
                     
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('Item created');
                });


    },

}