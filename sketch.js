var ship;
var asteroids = [];
var laser = [];
var score =0;
var lives = 5;
var text_x= 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  
  for (var i=0; i<6; i++){
  	asteroids.push(new Asteroid());
  }
  
  
}

function draw() {

  background(0);
  
  if (asteroids.length==0){
    for (var i=0; i<10; i++){
      asteroids.push(new Asteroid());
    }
  }
  
  push();
  
  textSize(50);
  fill(0,255,0);
  text('score', text_x, 100);
  text(score, text_x+150, 100);
  text('lives', text_x,50);
  text(lives, text_x +150,50);
  
  pop();
  
  for (var p=0; p< asteroids.length; p++){
		if (ship.hits(asteroids[p])){
    	console.log(' rip ' );
      lives--;
      if (lives==0){
    		//you die 
      }
    }
    
    
  	asteroids[p].render(); 
    asteroids[p].update();
    asteroids[p].edges();
  }
  
  for (var i=laser.length -1; i>=0; i--){
  	laser[i].render(); 
    laser[i].update();
    if (laser[i].offscreen()){
      laser.splice(i,1);
      break;
    }
  	
    for (var j= asteroids.length -1; j>=0; j--){
    	if (laser[i].hits(asteroids[j])){
        score+=5;
        
        if (asteroids[j].r >23){
          var newAsteroids = asteroids[j].breakup();
          
        	asteroids = asteroids.concat(newAsteroids);
        	
        }else{
          //increase score for asteroid dying
          score+=20;
        }
        console.log('HIT');
        asteroids.splice(j ,1);
        laser.splice(i,1);
        break;
      }  
    }
  }
  ship.render();
  ship.update();
  
  
}
function keyReleased(){
	ship.setRotation(0); 
  ship.boosting(false);
}

function keyPressed(){
  if (key == ' '){
  	laser.push(new Laser(ship.position, ship.heading));
  }
  
	if (keyCode ==  RIGHT_ARROW){
    ship.setRotation(0.1);
  }else if (keyCode ==  LEFT_ARROW){
    ship.setRotation(-0.1);
  }if (keyCode == UP_ARROW){
    ship.boosting(true);
  }
}

  