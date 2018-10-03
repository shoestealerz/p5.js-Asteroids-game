
function Ship() {
  this.position = createVector(width/2, height/2);
  this.r =10;
  this.heading = PI/2;
  this.rotation =0;
  this.velocity = createVector(0,0);
  this.isBoosting = false;
  
  this.update = function(){
    this.turn();
    this.position.add(this.velocity);
    this.velocity.mult(0.95);
    if (this.isBoosting){
      this.boost();
    }
    this.edges();
  }
  
  this.hits = function(asteroid){
  	var d = dist(this.position.x, this.position.y, asteroid.position.x, asteroid.position.y);
    if (d<asteroid.r + this.r){
    	return true; 
    }else{
      return false;
    }
    
  }
  
  this.boost = function(){
    var force = p5.Vector.fromAngle(this.heading);
    this.velocity.add(force);
		
  }
  this.boosting = function(bool){
    this.isBoosting = bool;
  }
  
  
  this.render = function(){
    push();
    translate(this.position.x, this.position.y);
    rotate(this.heading + PI/2);
    fill(0);
    stroke(255);
		triangle(-this.r, 2*this.r, this.r,2*this.r,0, -this.r ); 
    pop();
  }
  
  this.edges = function(){
  	if (this.position.x > width + this.r){
    	this.position.x = -this.r; 
    }else if (this.position.x < -width - this.r){
      this.position.x = width + this.r;
    }
    if (this.position.y > height + this.r){
    	this.position.y = -this.r; 
    }else if (this.position.y < -height - this.r){
      this.position.y = height + this.r;
    }
  }
  
  
  
  this.setRotation = function(a){
   this.rotation = a; 
  }
  
  this.turn = function(){
   this.heading = this.heading + this.rotation;
    
  }
  
  
}  