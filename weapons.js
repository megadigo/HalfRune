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
    this.updateme = false;
	this.collidable = false;
    
    //animation
    this.addAnimation("stop",[546]);
    this.addAnimation("swing",[546]);
    this.setCurrentAnimation("stop");
    
    },
 
   	OnInteract: function(obj){
  		this.updateme = true;	
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
		this.pos.x=playerX;
 		this.pos.y= playerY - 10;
		return this.updateme ;
		// check & update player movement
		this.updateme = false;
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


