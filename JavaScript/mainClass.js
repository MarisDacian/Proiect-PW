
function main(){

		var arr = [];
		var numar_containere=356;
		let sum = 6000;
		let numar_maximContainer=400;
		arr = arrGenerator(arr, numar_containere);
		let n = arr.length;
		

		let x = findMaxSubarraySum(arr, n, sum,numar_maximContainer);

		//consomel.log(x); //Suma

	 
		var matrixarr=[[]];
		matrixarr=listToMatrix(arrGoodContainer,18);
	
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