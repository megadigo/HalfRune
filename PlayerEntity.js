/*------------------- 
a player entity
-------------------------------- */
var direction = "left";
var stance = "normal";
var actionActive = false;

var PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // set the walking  and gravity
    this.setVelocity(2, 2);
    this.gravity=0;
    me.debug.renderHitBox = false;
    
    //animation
    this.addAnimation("normal_up",[0,1,2,3]);
    this.addAnimation("normal_right",[4,5,6,7]);
    this.addAnimation("normal_down",[8,9,10,11]);
    this.addAnimation("normal_left",[12,13,14,15]);
    this.setCurrentAnimation(stance + "_" + direction);
    
    // adjust the bounding box x,w,y,h
    this.updateColRect(5,10 , 5, 10);
 
    // set the display to follow our position on both axis
    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
   update: function() { 
		
		// Handle Inputs
		if (me.input.isKeyPressed('left')) {
		    this.doWalkHorizontal(true);
		} else if (me.input.isKeyPressed('right')) {
		    this.doWalkHorizontal(false);
		} else if (me.input.isKeyPressed('up')) {
			this.doWalkVertical(true);
		} else if (me.input.isKeyPressed('down')) {
			this.doWalkVertical(false);
		} else if (me.input.isKeyPressed('action')) {
			actionActive = true;
		} else {
			actionActive = false;
		    this.doStand();
		}
			  		
		// check collition
		res = me.game.collide(this);
		if (res)
		{
			// What to do if Collides
			res.obj.OnCollide(res,this);
			
			// What do do if interacts
			if (actionActive == true) {
				res.obj.OnInteract(res,this);
			};
			// If solid bounce
			if (res.Obj.collision=="solid"){
				doBounce(res);
			}
		};
		// check & update player movement
		this.updateMovement();
		  		
  		// update animation if necessary
	    if (this.vel.x!=0 || this.vel.y!=0) {
			if (this.vel.x > 0) {
			    direction="right";
			};
			if (this.vel.x < 0) {
			    direction="left";
			};
			if (this.vel.y > 0) {
			    direction="down";
			};
			if (this.vel.y < 0) {
			    direction="up";
			};
            this.setCurrentAnimation(stance + "_" + direction);
            this.parent(this);
            return true;
	   	} else {
		 	return false;
		};
	},
	 
    doWalkHorizontal : function(left) {
		this.vel.x += (left) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
    },
    
    doWalkVertical : function(up) {
		this.vel.y += (up) ? -this.accel.y * me.timer.tick : this.accel.y * me.timer.tick;
    },
    
    doStand : function(up) {
		this.vel.y = 0;
		this.vel.x = 0;
    },
    doBounce: function(res) {
    	if (res.x<0 && this.vel.x<0){
			obj.vel.x = 0;
		};
		if (res.x>0 && this.vel.x>0){
			obj.vel.x = 0;
		}
		if (res.y<0 && this.vel.y<0){
			obj.vel.y = 0;
		};
		if (res.y>0 && this.vel.y>0){
			obj.vel.y = 0;
		}
    }
}
);
