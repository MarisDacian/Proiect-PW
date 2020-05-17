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
