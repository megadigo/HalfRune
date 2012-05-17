/**
 * @author megadigo
 */
var chest = me.ObjectEntity.extend({
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // set props
    this.status = "close";
    this.updateme = true;
	this.collidable = true;
    
    //animation
    this.addAnimation("open",[619]);
    this.addAnimation("close",[620]);
    this.setCurrentAnimation("close");
    
    // adjust the bounding box x,w,y,h
    //this.updateColRect(2,12 , 2, 5);
    },
 
   	OnInteract: function(obj){
   		if (this.status=="close"){
   			this.setCurrentAnimation("open");
   			this.status="open"	
   		} else {
   			this.setCurrentAnimation("close");
   			this.status="close"
   		};	
  		this.updateme = true;	
  	},
  	OnCollide: function(res,obj){
  		this.doBounce(res,obj);
  	},
 
    /* -----
 
    update
 
    ------ */
   update: function() { 
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
