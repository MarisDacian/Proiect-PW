module.exports = {

    getWorkers: function(client,res){
        var collection = client.db("PortDB").collection("Users");
        collection.find({}).toArray(function(err,result){
            if(err)
                throw err;
            else
                res.send(result);
        });
    },
    getOneWorkersLogin: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ userName:  data[0], password: data[1]} , { projection: { 
            firstName: 1, lastName: 1, cnp: 1, userName: 1,
            email: 1, password: 1,} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
           // if (result) {
           //     console.log("user exists");
            //    res.redirect('/Workers');}
        res.send(result);
    
          });
      
    },
    getOneMailLogin: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ email:  data[0], password: data[1]} , { projection: { email: 1, password: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getOneCNPLogin: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ cnp:  data[0], password: data[1]} , { projection: { cnp: 1, password: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getOneWorkersEmail: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ email:  data[4]} , { projection: { email: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getOneWorkersCNP: function(client,data,res){
        dbo= client.db("PortDB");
        console.log(data);
        dbo.collection("Users").find({ cnp:  data[2]} , { projection: { cnp: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },

    getOneWorkersUsernameOnly: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ userName:  data[3]} , { projection: { userName: 1} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getOneWorkersInfo: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ cnp:  data} , { projection: { 
            firstName: 1, lastName: 1, cnp: 1, userName: 1,
            email: 1, password: 1,} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
}