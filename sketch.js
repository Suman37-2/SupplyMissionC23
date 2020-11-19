var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2,650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 c1=Bodies.rectangle(305,600,20,100,{isStatic:true});
	 World.add(world,c1);

	 c2=Bodies.rectangle(485,600,20,100,{isStatic:true});
	 World.add(world,c2);

	 c3=Bodies.rectangle(395,649,200,20,{isStatic:true});
	 World.add(world,c3);

	 c4=Bodies.rectangle(395,630,200,20,{isStatic:true});
	 World.add(world,c4);

	Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  var pos1=c1.position;
  var pos2=c2.position;
  var pos3=c3.position;
  var pos4=c4.position;
  fill("red");
  rect(pos1.x,pos1.y,20,100);
  rect(pos2.x,pos2.y,20,100);
  rect(pos3.x,pos3.y,200,20);
  fill("black");
  rect(pos4.x,pos4.y,150,20);
  drawSprites();
  fill("orange");
  textSize(18);
  text("*Press down arrow key to drop the package*",250,100);
}

function keyPressed() {
	if(keyCode===DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
}

}


