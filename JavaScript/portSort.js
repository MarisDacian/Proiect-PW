


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

findShip=new Array();
findShip[0]="SS Emil";
//console.log(findShip);
let promise1 = new Promise((res) => {
    res(getShipData(findShip));

});
ExistContor = 0;
let result1 = await promise1;
//console.log(result1);
ShipDataString=result1;
//console.log(ShipDataString[0].containerData);



const str = ShipDataString[0].containerData;

arraylistObjects=[];


class Functionality{

    constructor(tonage,type,startingPoint,destinationPoint,id){
   
   this.tonage = tonage;
               this.type = type;
               this.startingPoint = startingPoint;
               this.destinationPoint = destinationPoint;
               this.id = id;
    }
   
   
   }
const words = str.split(',');

contor=0;
for(i=0;i<words.length-1;i++){
  words2= words[i].split('/');
 container=new Functionality(words2[0],words2[1],words2[2],words2[3],words2[4]);
arraylistObjects[i]=container;
contor++;

}


            for(i=0;i<arraylistObjects.length;i++){
                    
                myContainer =new Container(arraylistObjects[i].tonage,arraylistObjects[i].type,arraylistObjects[i].startingPoint ,arraylistObjects[i].destinationPoint  ,i,2,3,21,200,300);
                //   myContainer =new Container(databasePort[i].Weight,databasePort[i].containerType,databasePort[i].LocationFrom ,databasePort[i].LocationTo  ,i,2,3,21,200,300);
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

async function getShipData(shipData) {
	let promise = new Promise((res, rej) => {
		$.ajax({
			type: "GET",
			url: "/getShipData",
			data: { shipData: shipData },
			success: function(data) {
				setTimeout(500);
				console.log(data);
				res(data);
			}
		});
	});
	let result;
  
	result = await promise;
	return result;
  }