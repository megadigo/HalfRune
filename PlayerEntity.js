/*------------------- 
a player entity
-------------------------------- */
var PlayerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
 
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // set the walking  and gravity
    this.setVelocity(2, 2);
    this.gravity=0
    
    //animation
    this.addAnimation("up",[0,1,2,3]);
    this.addAnimation("right",[4,5,6,7]);
    this.addAnimation("down",[8,9,10,11]);
    this.addAnimation("left",[12,13,14,15]);
    this.setCurrentAnimation("left");
    
    // adjust the bounding box x,w,y,h
    this.updateColRect(2,12 , 2, 5);
 
    // set the display to follow our position on both axis
    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
   update: function() {
 
        if (me.input.isKeyPressed('left')) {
            this.doWalkHorizontal(true);
        } else if (me.input.isKeyPressed('right')) {
            this.doWalkHorizontal(false);
	} else if (me.input.isKeyPressed('up')) {
            this.doWalkVertical(true);
	} else if (me.input.isKeyPressed('down')) {
            this.doWalkVertical(false);
        } else {
            this.vel.x = 0;
	    this.vel.y = 0;
        }
        
     
        // check & update player movement
        this.updateMovement();
     
        // check for collision
        /*var res = me.game.collide(this);
     
        if (res) {
            // if we collide with an enemy
            if (res.obj.type == me.game.ENEMY_OBJECT) {
                // check if we jumped on it
                if ((res.y > 0) && ! this.jumping) {
                    // bounce
                    me.audio.play("stomp");
                    this.forceJump();
                } else {
                    // let's flicker in case we touched an enemy
                    this.flicker(45);
                    me.game.HUD.setItemValue("score", 0);
                }
            }
        }
	*/
        // update animation if necessary
        if (this.vel.x!=0 || this.vel.y!=0) {
            // update objet animation
	if (this.vel.x > 0) {
	    this.setCurrentAnimation("right")
	};
	if (this.vel.x < 0) {
	    this.setCurrentAnimation("left")
	};
	if (this.vel.y > 0) {
	    this.setCurrentAnimation("down")
	};
	if (this.vel.y < 0) {
	    this.setCurrentAnimation("up")
	};
            this.parent(this);
            return true;
        }
        return false;
    },
 
    doWalkHorizontal : function(left) {
	
	this.vel.x += (left) ? -this.accel.x * me.timer.tick : this.accel.x * me.timer.tick;
    },
    doWalkVertical : function(up) {
	
	this.vel.y += (up) ? -this.accel.y * me.timer.tick : this.accel.y * me.timer.tick;
    }
}
);
