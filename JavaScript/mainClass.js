
function main(){


	var	Port=portSort(10000,24);
	console.log(Port[1]);

		var arr = [];
		var numar_containere=356;
		let sum = 5000;
		let numar_maximContainer=15000;
		arr = arrGenerator(arr, numar_containere);
		let n = arr.length;
		

		let x = findMaxSubarraySum(Port[1], Port[1].length, sum,numar_maximContainer);
	
		//consomel.log(x); //Suma
		
		
		var matrixarr=[[]];
		matrixarr=listToMatrix(arrGoodContainer,18);
	console.log(arrGoodContainer.length);
		print(matrixarr);

			if(arrGoodContainer.length<=126){

				containerPlacement(arrGoodContainer.length,270,1110,18);
				containerPlacement(0,150,670,23);

			}else{

				containerPlacement(126,270,1110,18);
				containerPlacement(arrGoodContainer.length-126,150,670,23);

			}

			
	
}

main();	
