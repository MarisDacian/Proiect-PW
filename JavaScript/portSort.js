


  function listToMatrixPort(list=[], numberofRows) {

    var matrix = [], i, k;
    var n=numberofRows*2;
     auxhelp=0;
     
    for(i=0;i<n;i++){

        matrix[i] = [];
        for(j=0;j<list.length/n;j++){
                   
            if(auxhelp>=list.length){

            }else{
              
            matrix[i].push(list[auxhelp]);
          
            auxhelp++;
        }
        }
 
    }

        return matrix;
    }


    async function getContainers() {
     let promise = new Promise((res, rej) =>{
        $.ajax({
            type: "GET",
            url: "/GetContainers",
            success: function(data) {
               
                setTimeout(500);
                res(data);
              /*  for (i = 0; i < data.length; i++) {
                  console.log(data[i].LocationFrom);
                  PortArray[i]=data[i];

                }*/
               
            }
        });
    });
    let result;

    result = await promise;
    //  console.log(result);
  return result;
    }
   


async function portSort(numberofRows){

 var   ArrayPort=[];
 var   PortMatrix=[[]];




let promise = new Promise((res) => {
    res(getContainers());

});
ExistContor = 0;
let result = await promise;
//console.log(result);

var   databasePort= result;
//console.log(result);



            for(i=0;i<databasePort.length;i++){
                    
                
                        myContainer =new Container(databasePort[i].Weight,databasePort[i].containerType,databasePort[i].LocationFrom ,databasePort[i].LocationTo  ,i,2,3,21,200,300);
                    ArrayPort[i]=myContainer;   
                    }
 
      
    
        PortMatrix=listToMatrixPort(ArrayPort,numberofRows);

        group1=[];
        group2=[]
        contorPort=0;
        children=[];

        groupconcat=[];
        for(i=0;i<PortMatrix.length/2;i++){
           
        group1=PortMatrix[i];
        group2=PortMatrix[PortMatrix.length-i-1];
        groupconcat[contorPort] = group1.concat(group2);
   

        contorPort++;
        }
        
        for(k=0;k<groupconcat.length;k++){
            for(l=0;l<groupconcat[k].length;l++){
               groupconcat[k][l].BAY=k;
            }

        }



        var sum=0;
        for(i=0;i<PortMatrix.length/2;i++){
        sum = groupconcat[0].reduce(function(a, b){
                return a + b;
            }, 0);


            }  

      
         
return groupconcat;
}

