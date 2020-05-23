
rownumber=0;
function rowNumberUp(){
	
	rownumber++;
context.clearRect(0, 0, canvas.width, canvas.height);

if(rownumber<=47 && rownumber>=0){
	drawCalculation();
	drawShip(-110, 400);
}else{

	rownumber=0;
	drawCalculation();
	drawShip(-110, 400);
}

}

function rowNumberdown(){

rownumber--;

context.clearRect(0, 0, canvas.width, canvas.height);

if(rownumber<=47 && rownumber>=0){
	drawCalculation();	
	drawShip(-110, 400);
}else{

	rownumber=47;
	drawCalculation();
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
		drawCalculation();
		drawShip(-110, 400);
	}else{
	
		rownumber=47;
		drawCalculation();
		drawShip(-110, 400);
	}
	
	}
	var Port;



let ShipDataString="";

 async function main(){

	let promise = new Promise((res) => {
		res(portSort(48));
	
	});
	ExistContor = 0;
	let result = await promise;
	//console.log(result);

		Port= result;
	//	console.log(Port);
	//console.log(result);
	drawShip(-110, 400);
	drawCalculation();



	stringofShip=new Array();

            for(i=0;i<Port.length;i++){
				stringofShip[i]="";
                for(j=0;j<Port[i].length;j++){
                stringofShip+=Port[i][j].tonage+"/"+Port[i][j].type+"/"+Port[i][j].startingPoint+"/"+Port[i][j].destinationPoint+"/"+Port[i][j].id+",";
					
                }
			}
			
			stringOfShipArray=new Array();
			stringOfShipArray[0]="5ec8eb533a193c4d647f2031";
			stringOfShipArray[1]=stringofShip;
			loadContainersToBd(stringOfShipArray);
          /*
			findShip=new Array();
			findShip[0]="SS Emil";
			console.log(findShip);
			let promise1 = new Promise((res) => {
				res(getShipData(findShip));
			
			});
			ExistContor = 0;
			let result1 = await promise1;
			console.log(result1);
			ShipDataString=result1;
			console.log(ShipDataString[0].containerData);*/
}

/*
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
  }*/
async function loadContainersToBd(containerData) {
	let promise = new Promise((res, rej) => {
		
		$.ajax({
			type: "POST",
			url: "/updateShip",
			data: { containerData: containerData },
			success: function(data) {
				setTimeout(500);
				res(data);
			}
		});
	});
	let result;
  
	result = await promise;
	return result;
  }





function drawCalculation(){

	let sum = 10000;
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


main();	

