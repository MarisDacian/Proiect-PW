
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

function keyPush(evt) {
    switch(evt.keyCode) {
        case 13:
			rowNumberTextBox();
        break;
      
    }
}

function rowNumberTextBox(){

	context.clearRect(0, 0, canvas.width, canvas.height);
	rownumber=document.getElementById("RowNumber").value;
	if(rownumber<=47 && rownumber>=0){
		main();	
		drawShip(-110, 400);
	}else{
	
		rownumber=47;
		main();	
		drawShip(-110, 400);
	}
	
	}
 async function main(){



	let promise = new Promise((res) => {
		res(portSort(20000,48));
	
	});
	ExistContor = 0;
	let result = await promise;
	//console.log(result);
	
	var   Port= result;
	//console.log(result);
	
console.log(Port);
		
		let sum = 100000000000;
		let numar_maximContainer=420;
		document.addEventListener("keydown",keyPush);
		var y=document.getElementById("RowNumber").value = rownumber;
		let x = findMaxSubarraySum(Port[y], Port[y].length, sum,numar_maximContainer);

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

drawShip(-110, 400);
main();	

