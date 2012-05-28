/**
 * @author RCordeiro
 */
var weaponEntity = me.ObjectEntity.extend({
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // set props
    this.status = "stop";
    this.direction = "left";
    
	this.collidable = false;
    
    //animation
    this.addAnimation("stop",[546]);
    this.addAnimation("swing",[546]);
    this.setCurrentAnimation("stop");
    
    },
 
   	OnInteract: function(obj){
   		
  	},
  	OnCollide: function(res,obj){
  		//this.doBounce(res,obj);
  	},
 
 	followEntity: function(obj){
 		this.pos.x=obj.pos.x;
 		this.pos.y=obj.pos.y-20;
 		
 	},
    /* -----
 
    update
 
    ------ */
   update: function() {
	   	var ents = me.game.getEntityByName("mainPlayer");
	   	if (ents[0].direction == "up"){
	   		this.pos.x= ents[0].pos.x;
 			this.pos.y= ents[0].pos.y - 10;	
 			this.direction = "up"
	   	};
	   	if (ents[0].direction == "down" ){
	   		this.pos.x= ents[0].pos.x;
 			this.pos.y= ents[0].pos.y + 10;
 			this.direction = "down"	
	   	}
		if (ents[0].direction == "left" ){
	   		this.pos.x= ents[0].pos.x - 10;
 			this.pos.y= ents[0].pos.y;
 			this.direction = "left"	
	   	}
	   	if (ents[0].direction == "right" ){
	   		this.pos.x= ents[0].pos.x + 10;
 			this.pos.y= ents[0].pos.y;
 			this.direction = "right"	
	   	}
		this.updateme = true;
		// rotate sword
		if (this.direction == "up") {
			this.angle = Number.prototype.degToRad(0);
		};
		if (this.direction == "right") {
			this.angle = Number.prototype.degToRad(90);
		};
		if (this.direction == "down") {
			this.angle = Number.prototype.degToRad(180);
		};           
		if (this.direction == "left") {
			this.angle = Number.prototype.degToRad(270);
		};
		this.parent();
		return true;
		
    },
    
	
    /* -----

    bounce
 
    ------ */
   doBounce: function(res,obj) {
   		if (res.x<0 && obj.vel.x<0){
			obj.vel.x = 0;
		};
		if (res.x>0 && obj.vel.x>0){
			obj.vel.x = 0;
		}
		if (res.y<0 && obj.vel.y<0){
			obj.vel.y = 0;
		};
		if (res.y>0 && obj.vel.y>0){
			obj.vel.y = 0;
		}
   }
}
);

