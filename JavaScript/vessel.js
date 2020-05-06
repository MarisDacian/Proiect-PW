let arrSortContainer = [new Array()];
SortContorate=0;

function print(mat)
{ var i;
  var j;
  var heightStabilization=0;
    for ( i = 0; i < mat.length; i++) {
        if (i % 2 == 0) {
        
            for ( j = 0; j < mat[i].length; j++){
         // document.write(mat[i][j]+" ");
          arrSortContainer[SortContorate]=mat[i][j];
          arrSortContainer[SortContorate].i=i;
          arrSortContainer[SortContorate].j=j;
         SortContorate++;
      			}
            }
            
         else {
            for ( j = mat[i].length - 1; j >= 0; j--){
           // document.write(mat[i][j]+" ");
                     arrSortContainer[SortContorate]=mat[i][j];
                     arrSortContainer[SortContorate].i=i;
                     arrSortContainer[SortContorate].j=j;
                     SortContorate++;
            }
        }
           // document.write("<br>");
    }

}



 
