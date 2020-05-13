class Container {
		  constructor(tonage,type,startingPoint,destinationPoint,id,i,j,BAY,positionx,positiony) {
		    this.tonage = tonage;
		    this.type = type;
		    this.startingPoint = startingPoint;
		    this.destinationPoint = destinationPoint;
		    this.id = id;
		    this.i = i;
		    this.j = j;
			this.BAY = BAY;
			this.positionx = positionx;
			this.positiony = positiony;

		  }
	
		  display(){
		  	document.write("<br>");
		    document.write(this.tonage+" ");
		    document.write(this.type+" ");
		    document.write(this.startingPoint+" ");
		    document.write(this.destinationPoint+" ");
			document.write(this.id+" ");
			document.write(this.i+" ");
			document.write(this.j+" ");
			document.write(this.BAY+" ");
		    document.write("\n");
		  }

}

/*
function drawContainers(){
var arrayObject=[];
for(let i=0;i<15;i++){
		myContainer =new Container(i+10,i,"Brazilia","SUA","432-435");
		arrayObject[i]=myContainer;
		myContainer2 =new Container("20","23","Italia","SUA","432-435");
		myContainer2=arrayObject[i];
		myContainer2.display();  
		//console.log(myContainer2);   
}
		

}

drawContainers();
*/