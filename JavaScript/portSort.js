

function portSort(numberofContainer,numberofRows){

 var   ArrayPort=[];
 var   PortMatrix=[[]];
            for(i=0;i<numberofContainer;i++){
                        myContainer =new Container(random(),40,"Brazilia","SUA",i,2,3,11);
                    ArrayPort[i]=myContainer;   
                    }
 
        function listToMatrixPort(list=[], numberofRows) {

            var matrix = [], i, k;
            var n=numberofRows*2;
             auxdeajutor=0;
            for(i=0;i<n;i++){

                matrix[i] = [];
                for(j=0;j<list.length/n;j++){
                           
                    if(auxdeajutor>=list.length){

                    }else{
                    matrix[i].push(list[auxdeajutor]);
                    auxdeajutor++;
                }
                }
         
            }

                return matrix;
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

        
        var sum=0;
        for(i=0;i<PortMatrix.length/2;i++){
        sum = groupconcat[0].reduce(function(a, b){
                return a + b;
            }, 0);


            }  
          
return groupconcat;
}