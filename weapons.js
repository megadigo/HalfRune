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
    this.type = "weapon";
    this.status = "stop";
    this.direction = "left";
    
	this.collidable = false;
    
    //animation
    this.animationspeed = 3;
    this.addAnimation("idle",[0]);
    this.addAnimation("swing",[1,3]);
    this.setCurrentAnimation("idle");
    
    },
 
    /* -----
 
    update
 
    ------ */
   update: function() {
       var ents = me.game.getEntityByName("mainPlayer");
	   	if (ents[0].direction == "up"){
	   		this.pos.x= ents[0].pos.x - 5;
 			this.pos.y= ents[0].pos.y - 10;	
 			this.direction = "up"
	   	};
	   	if (ents[0].direction == "down" ){
	   		this.pos.x= ents[0].pos.x + 5;
 			this.pos.y= ents[0].pos.y + 10;
 			this.direction = "down"	
	   	}
		if (ents[0].direction == "left" ){
	   		this.pos.x= ents[0].pos.x - 10;
 			this.pos.y= ents[0].pos.y + 5;
 			this.direction = "left"	
	   	}
	   	if (ents[0].direction == "right" ){
	   		this.pos.x= ents[0].pos.x + 10;
 			this.pos.y= ents[0].pos.y - 5;
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
		
		
		
		// check if need to swing;
		if (ents[0].swing == true && ents[0].actionActive == true) {
		    me.audio.play("swing");
		    this.setCurrentAnimation("swing",this.OnAfterSwing);
		};
		this.parent();
		return true;
			
    },
    
    OnAfterSwing: function() {
         this.setCurrentAnimation("idle");
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

