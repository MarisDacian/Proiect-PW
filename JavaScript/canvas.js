var canvas = document.getElementById("cvs");
var context = canvas.getContext('2d');

function drawContainer(width, height, Tonage) {

 var img = new Image();
 img.src = '' + randomColor();

 img.onload = function() {

  context.drawImage(img, width, height, 50, 50);
  context.fillStyle = "red";
  context.font = "30px Arial";
  context.fillText(Tonage, width + 5, height + 38);


 }
}

function drawShip(width, height) {

 var img = new Image();
 img.src = '/img/Nava8.gif';

 img.onload = function() {

  context.drawImage(img, width, height, 1700, 800);



 }
}

function randomColor() {

            x = Math.floor(Math.random() * Math.floor(4 + 1)) + 5;

            let containerColor = '';
            if (x == 5) {
              containerColor = '/img/containerPortocaliu.jpg';
            }
            if (x == 6) {
              containerColor = '/img/containerAlbastru.jpg';
            }
            if (x == 7) {
              containerColor = '/img/containerGri.jpg';
            }
            if (x == 8) {
              containerColor = '/img/containerRoz.jpg';
            }
            if (x == 9) {
              containerColor = '/img/containerVerde.jpg';
            }

 return containerColor;
}
//console.log(randomColor());



//console.log("MAta"+arrGoodContainer);
var contorTonage = 0;

function containerPlacement(number, startPositionWidth, startPositionHeight, NumberOfColumn) {
              contor = 0;
              number = number * 50;

              var j = startPositionWidth;
              var e = startPositionHeight;
              for (let i = 0; i < number; i = i + 50) {

                if (contor == NumberOfColumn) {

                j = startPositionWidth;
                contor = 0;
                e = e - 50;
             
                }
                arrSortContainer[contorTonage].positionx=j;
                arrSortContainer[contorTonage].positiony=e;
                drawContainer(j, e, arrSortContainer[contorTonage].tonage);

                contorTonage++;
                contor++;
                j = j + 50;
             
              }
            
}
drawShip(-110, 400);



let htmlCanvas = document.getElementById('cvs');

function resizeCanvas() {
        htmlCanvas.width = window.innerWidth - 500;
        htmlCanvas.height = window.innerHeight - 100;
}



function mousePosition(startX,startY) {
 
 var canvasX;
 var canvasY;

 document.addEventListener("click", function name(e) {
  var cRect = canvas.getBoundingClientRect();
  canvasX = Math.round(e.clientX - cRect.left);
  canvasY = Math.round(e.clientY - cRect.top);
  console.log(canvasX, canvasY);
  console.log(arrSortContainer.length);
for(i=0;i<arrSortContainer.length;i++){

  if (canvasX > arrSortContainer[i].positionx &&  canvasX< arrSortContainer[i].positionx+50 && canvasY > arrSortContainer[i].positiony && canvasY < arrSortContainer[i].positiony+50) {
              context.beginPath();
              context.lineWidth = "4";
              context.strokeStyle = "red";
              context.rect(arrSortContainer[i].positionx, arrSortContainer[i].positiony, 50, 50);
              context.stroke();
    console.log(arrSortContainer[i].positionx);
    console.log(arrSortContainer[i].positiony);
  
   
  }


}

 });


}