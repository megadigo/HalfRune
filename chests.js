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
    this.collidable = true;
    this.type = "container";
    //animation
    this.addAnimation("open",[619]);
    this.addAnimation("close",[620]);
    this.setCurrentAnimation("close");
    
    // adjust the bounding box x,w,y,h
    //this.updateColRect(2,12 , 2, 5);
    },
 
   	interact: function(obj){
  		this.setCurrentAnimation("open");		
  	},
 
    /* -----
 
    update
 
    ------ */
   update: function() { 
		return false;
		// check & update player movement
		
    },
}
);
