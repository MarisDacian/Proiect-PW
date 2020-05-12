

function portSort(numberofContainer,numberofRows){

 var   ArrayPort=[];
 var   PortMatrix=[[]];
            for(i=0;i<numberofContainer;i++){
                        myContainer =new Container(random(),40,"Brazilia","SUA","432-435",2,3,11);
                    ArrayPort[i]=myContainer;   
                    }
 
        function listToMatrixPort(list=[], elementsPerSubArray) {
            var matrix = [], i, k;
            for (i = 0, k = -1; i < list.length; i++) {
                if (i % elementsPerSubArray === 0) {
                    k++;
                    matrix[k] = [];
                }
        
                
                matrix[k].push(list[i]);
            }



                return matrix;
            }

        calc=numberofContainer/numberofRows/2;

        PortMatrix=listToMatrixPort(ArrayPort,Math.floor(calc));

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

        
        var sum=0;
        for(i=0;i<PortMatrix.length/2;i++){
        sum = groupconcat[0].reduce(function(a, b){
                return a + b;
            }, 0);


            }  
          
return groupconcat;
}