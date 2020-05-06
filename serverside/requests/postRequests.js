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
    createItem: function(client,data){
        const collection = client.db("PortDB").collection("Containers");	
           
                collection.insertOne({  
                    //Aici trb specificat ce incarcam

                    // containerType:data[0],
                    // Weight:data[1],
                    // LocationFrom:data[2],
                    // LocationTo:data[3],  
                              
                   },function(err,res){
                    if(err)
                        throw err;
                    else
                        console.log('Item created');
                });


    },
    // insertNewMenu: function(client,data,res){
    //     let collection = client.db("Restaurant").collection("Menus");
    //     let object={
    //         description:data.description,
    //         id_food:parseInt(data.id_food,10),
    //         id_category:parseInt(data.id_category,10),
    //         price:parseInt(data.price,10),
    //     }
    //     console.log(object);
    //     collection.insertOne(object,function(err){
    //         if(err)
    //             throw err;
    //         else
    //             res.send("Menus inserted successfully!");
    //     });
    // }
}