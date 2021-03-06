module.exports = {
    countdownFunc:function(res, count) {
        res.write("data: " + count + "\n\n")
    
          setTimeout(() => countdownFunc(res, count-1), 1000)
       
      },
    getWorkers: function(client,res){
        var collection = client.db("PortDB").collection("Users");
        collection.find({}).toArray(function(err,result){
            if(err)
                throw err;
            else
                res.send(result);
        });
    },
    getContainers: function(client,res){
        var collection = client.db("PortDB").collection("Containers");
        collection.find({}).toArray(function(err,result){
            if(err)
                throw err;
            else
                res.send(result);
        });
    },

    getShips: function(client,res){
        var collection = client.db("PortDB").collection("Ships");
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
            email: 1, password: 1,sex:1,} }).toArray(function(err, result) {
            if (err) throw err;
            //console.log(result);
           // if (result) {
           //     console.log("user exists");
            //    res.redirect('/Workers');}
        res.send(result);
    
          });
      
    },
    getShipData: function(client,data,res){
        dbo= client.db("PortDB");
        console.log(data[0]);
        dbo.collection("Ships").find({ BoatName:  data[0]} , { projection: { 
            containerData: 1} }).toArray(function(err, result) {
            if (err) throw err;
          //  console.log(result);
           // if (result) {
           //     console.log("user exists");
            //    res.redirect('/Workers');}
        res.send(result);
    
          });
      
    },
    getOneMailLogin: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ email:  data[0], password: data[1]} , { projection: { firstName: 1, lastName: 1, cnp: 1, 
            userName: 1, email: 1, password: 1,sex:1,} 
        }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getOneCNPLogin: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Users").find({ cnp:  data[0], password: data[1]} , { projection: { firstName: 1, lastName: 1, cnp: 1, 
            userName: 1, email: 1, password: 1,sex:1,} }).toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send(result);
    
          });
      
    },
    getContainerId: function(client,data,res){
        dbo= client.db("PortDB");
        dbo.collection("Containers").find({ id:  data[0]} , { projection: { id: 1} }).toArray(function(err, result) {
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