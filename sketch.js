var canvas;
var music;
var box
var surface1
var surface2
var surface3
var surface4



function setup(){
    canvas = createCanvas(800,600);
    //create 4 different surfaces
  surface1=createSprite(100,580,360,30);
  surface1.shapeColor="pink"
  surface2=createSprite(400,580,360,30);
  surface2.shapeColor="yellow"
  surface3=createSprite(600,580,360,30);
  surface3.shapeColor="blue"
  surface4=createSprite(800,580,360,30);
  surface4.shapeColor="green"



  box=createSprite(270,50,20,20);
  box.shapeColor="orange"
  

    //create box sprite and give velocity
    box.velocityX=3
    box.velocityY=4
  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    createEdgeSprites()

    
    //add condition to check if box touching surface and make it box
   
    if(surface1.isTouching(box) && box.bounceOff(surface1)){
      box.bounceOff(edges)
      box.shapeColor="pink"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
    
      box.shapeColor="blue"
    }

      
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
    
      box.shapeColor="yellow"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){az
    
      box.shapeColor="green"
    }

    drawSprites();
  }
  box.bounceOff(edges);

