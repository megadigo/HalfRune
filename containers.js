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
    this.type = "container";
    //animation
    this.addAnimation("open",[619]);
    this.addAnimation("close",[620]);
    this.setCurrentAnimation("close");
    
    // adjust the bounding box x,w,y,h
    //this.updateColRect(2,12 , 2, 5);
    },
 
   	OnInteract: function(res,obj){
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
  		
  	},
 
    /* -----
 
    update
 
    ------ */
   update: function() { 
		return this.updateme ;
		// check & update player movement
		this.updateme = false;
    },
}
);
