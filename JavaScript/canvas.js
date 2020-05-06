        var canvas  = document.getElementById("cvs");
        var context = canvas.getContext('2d');

function drawContainer(width,height,Tonage){

        var img = new Image();
        img.src = ''+randomColor();
 
        img.onload = function ()
        {
            
            context.drawImage(img, width, height,50,50);
                context.fillStyle = "red";
        		context.font = "30px Arial";
				context.fillText(Tonage, width+5, height+38);


        }
      }

      function drawShip(width,height){

        var img = new Image();
        img.src = 'Nava8.gif';
 
        img.onload = function ()
        {
            
            context.drawImage(img, width, height,1700,800);
             


        }
      }

function randomColor(){

  x = Math.floor(Math.random() * Math.floor(4 + 1)) + 5;

let containerColor='';
if(x==5){
containerColor='containerPortocaliu.jpg';
}
if(x==6){
containerColor='containerAlbastru.jpg';
}
if(x==7){
containerColor='containerGri.jpg';
}
if(x==8){
containerColor='containerRoz.jpg';
}
if(x==9){
containerColor='containerVerde.jpg';
}

return containerColor;
}
//console.log(randomColor());



//console.log("MAta"+arrGoodContainer);
  var contorTonage=0;
function containerPlacement(number,startPositionWidth,startPositionHeight,NumberOfColumn){
			contor=0;
			number=number*50;

			var j=startPositionWidth;
			var e=startPositionHeight;
			for(let i=0;i<number;i=i+50){
			
				if(contor==NumberOfColumn){
			
					j=startPositionWidth;
					contor=0;
					e=e-50;
					
				}
      drawContainer(j,e,arrSortContainer[contorTonage].tonage);
  
     contorTonage++;
	 contor++;
	 j=j+50;
  }
}
 drawShip(-110,400);



let htmlCanvas = document.getElementById('cvs');
function resizeCanvas() {
            htmlCanvas.width = window.innerWidth-500;
            htmlCanvas.height = window.innerHeight-100;    
}



function mousePosition(){

	 var canvasX;
	 var canvasY;

 document.addEventListener("click", function name(e){
 	var cRect = canvas.getBoundingClientRect();       
     canvasX = Math.round(e.clientX - cRect.left); 
     canvasY = Math.round(e.clientY - cRect.top);   
 console.log(canvasX,canvasY);
 
 if(canvasX>150 && canvasX<200 && canvasY>670 && canvasY<720){
    context.beginPath();
    context.lineWidth = "4";
    context.strokeStyle = "Green";
    context.rect( 150, 670 , 50, 50);
    context.stroke();
}

});






}

mousePosition();