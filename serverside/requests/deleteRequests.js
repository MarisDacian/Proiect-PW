module.exports = {

    // clearAll : function(client){
    //     const db = client.db("Restaurant");
    //     db.collection("Tables").drop(function(err){
    //         if(err)
    //             throw err;
    //         else{
    //             console.log('Collection deleted succesfully!');
    //         }
    //     });
    //     db.createCollection("Tables", function(err, res) {
    //         if (err) throw err;
    //         console.log("Collection created!");
    //       });

          
    //     db.collection("Orders").drop(function(err){
    //         if(err)
    //             throw err;
    //         else
    //             console.log('Collection deleted succesfully!');
    //     });
    //     db.createCollection("Orders", function(err,res){
    //         if(err)
    //             throw err;
    //         console.log("Collection created");
    //       });
    // },

    deleteWorker : function(client,data,res){
        console.log(obj);
        const collection = client.db("PortDB").collection("Users");
        collection.deleteOne({ cnp:data[0]},function(err){
            if(err)
                throw err;
            else{
                res.send("Deleted successfully!");
            }    
        });
    }
}