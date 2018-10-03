function Asteroid(position, r){
  if (position){
  	this.position = position;    
  }else{
    this.position = createVector(random(width), random(height));
  }
  if (r){
  	this.r = r*0.5;    
  }else{
    this.r = random(15,50);
  }
  
	
  
  this.total = floor(random(5,15));
  this.offset = [];
  this.velocity = p5.Vector.random2D();
  
  for (var i=0; i<this.total; i++){
    this.offset[i] = random(-this.r*0.5,this.r*0.5);
  }
  
  
  this.update = function(){
  	this.position.add(this.velocity); 
    
  }
  
  this.breakup = function(){
  	var newA = [];
  	newA[0] = new Asteroid(this.position, this.r);
    newA[1] = new Asteroid(this.position, this.r);
    return newA;
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
  
  this.render = function(){
    push();
    
    
    
    noFill();
    stroke(255);
		translate(this.position.x, this.position.y);
    //ellipse(0,0,this.r*2);
    
    beginShape();
    for (var i =0 ; i<this.total; i++){
    	var angle = map(i ,0 ,this.total, 0 , TWO_PI);
      var r = this.r + this.offset[i];
      var x = r*cos(angle);
      var y = r*sin(angle);
      vertex(x,y);
    }
    endShape(CLOSE);
    
    
    pop();
  }
  
  
  
  
  
  
  
  
  
  
}