class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,	
            restitution:0.3,
            friction:0.5,
            density:1.2		
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            var ang=this.body.angle
			push()
			translate(groundPos.x, groundPos.y);
            rotate (ang)
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.w, this.h);
			pop()
			
	}

}