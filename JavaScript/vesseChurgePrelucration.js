function listToMatrix(list=[], elementsPerSubArray) {
    var matrix = [], i, k;
    var contor=0;
    for (i = 0, k = -1; i < list.length; i++) {

	  if(i<=126){
       
        if (i % elementsPerSubArray === 0) {
            k++;
            matrix[k] = [];
        }
    }
       
 	if(i>126){
        contor++;
        if (contor == 23) {
        	contor=0;
            k++;
            matrix[k] = [];
        }
    }
        
        matrix[k].push(list[i]);
   	 }



	    return matrix;
	}

