
rownumber=0;
function rowNumberUp(){
	
	rownumber++;
console.log(rownumber);
context.clearRect(0, 0, canvas.width, canvas.height);

if(rownumber<=47 && rownumber>=0){
	main();	
	drawShip(-110, 400);
}else{

	rownumber=0;
	main();	
	drawShip(-110, 400);
}

}
function rowNumberdown(){

rownumber--;
console.log(rownumber);
context.clearRect(0, 0, canvas.width, canvas.height);

if(rownumber<=47 && rownumber>=0){
	main();	
	drawShip(-110, 400);
}else{

	rownumber=47;
	main();	
	drawShip(-110, 400);
}


}
function main(){

		var	Port=portSort(20000,48);
		let sum = 10000;
		let numar_maximContainer=420;
		let x = findMaxSubarraySum(Port[rownumber], Port[rownumber].length, sum,numar_maximContainer);
		document.getElementById("RowNumber").value = rownumber;
	
		var matrixarr=[[]];
		matrixarr=listToMatrix(arrGoodContainer,18);
	
		print(matrixarr);
		//console.log(matrixarr);
		mousePosition(270,1110);
			if(arrGoodContainer.length<=126){

				containerPlacement(arrGoodContainer.length,270,1110,18);
				containerPlacement(0,150,670,23);
				
			}else{

				containerPlacement(126,270,1110,18);
				containerPlacement(arrGoodContainer.length-126,150,670,23);
			}
		
			
	
 arrGoodContainer = [];
 contorSort=0;
}

//drawShip(-110, 400);
//main();	