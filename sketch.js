//Create variables here
var dog, happyDog; 
var database; 
var foodS, foodStock; 


function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png"); 
  dogHappyImg = loadImage("images/dogImg1.png"); 
}

function setup() {
  database = firebase.database(); 
  console.log(database); 
	createCanvas(500, 500);

  dog = createSprite(250, 300, 40, 40);
  dog.scale = 0.1; 
  dog.addImage(dogImg); 
  foodStock=database.ref('food'); 
  foodStock.on("value", readStock); 
}


function draw() {  
background(rgb(46, 10, 87)); 

if(keyWentDown(UP_ARROW)){
  writeStock(foodS); 
  dog.addImage(dogHappyImg);
}
  drawSprites();
  //add styles here
textSize(20); 
fill("red");
text("Feed your pet! Hint: Press up arrow key", 80, 190); 
}
function readStock(data){
  foodS=data.val(); 
}

function writeStock(x){
  
  if(x<=0){
    x=0; 
  }else{
    x=x+1; 
  }
  
  database.ref('/').update({
    Food:x
  })
}



