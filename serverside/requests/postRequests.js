module.exports = {

    createUser: function(client,data){
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

    // updateToList: function(client,data,res){
    //     const collection = client.db("Restaurant").collection("Orders");
    //     console.log(data);
    //     var whichOne = { table_id : parseInt(data.table_id) };
    //     console.log(whichOne);
    //     console.log(parseInt(data.total_price));
    //     var newdata = { $set: { food:data.food , total_price: parseInt(data.total_price) } };
    //     collection.updateOne( whichOne, newdata, function(err){
    //         if(err)
    //             throw err;
    //         else{
    //             res.send("List was updated!");
    //         }
    //     });
    // },

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