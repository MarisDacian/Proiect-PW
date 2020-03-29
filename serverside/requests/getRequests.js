module.exports = {

    getUsers: function(client,res){
        var collection = client.db("PortDB").collection("Users");
        collection.find({}).toArray(function(err,result){
            if(err)
                throw err;
            else
                res.send(result);
        });
    },
    getOneUser: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ userName:  data[3], password: data[6]} , { projection: { firsName: 1, lastName: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
}