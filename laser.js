function Laser(shipPosition, angle){
	this.position = createVector(shipPosition.x,shipPosition.y);
  this.velocity = p5.Vector.fromAngle(angle)
  this.velocity.mult(5);
  
  this.update = function(){
  	this.position.add(this.velocity); 
    
  }
  
  this.render = function(){
    push();
  	stroke(255);
    strokeWeight(4);
    
    point(this.position.x, this.position.y);
    pop();
    
    
  }
  
  this.hits = function(asteroid){
  	var d = dist(this.position.x, this.position.y, asteroid.position.x, asteroid.position.y);
    if (d<asteroid.r){
    	return true; 
    }else{
      return false;
    }
    
  }
    
  
  this.offscreen = function(){
  	if (this.position.x > width || this.position.x < 0 || this.position.y >height || this.position.y <0){
    	return true; 
    }else{
      return false;
    }
  }
  
  
  
  
  
  
  
}