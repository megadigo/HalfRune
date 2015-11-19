/*------------------- 

a player entity

-------------------- */

var playerEntity = me.Entity.extend({
 
    /* -----
 
    constructor
 
    ------ */
   
init: function(x, y, settings) {
  
    // player Vars
	var moving = false;
	var actionActive = false;
	var interationActive = false;
	var facing = "left";
	
    // settings
    settings.type = "player";
    settings.image = "creatures";
	this._super(me.Entity, 'init',[x, y, settings]); 

	this.body.collisionType = me.collision.types.PLAYER_OBJECT;
	this.body.setVelocity(2, 2);
	this.body.gravity = 0;
    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
	this.alwaysUpdate = true;
   
    //animation
    this.renderable.addAnimation("stand",[21]);
	this.renderable.addAnimation("walk",[21,41]);
    this.renderable.setCurrentAnimation("stand");
    this.renderable.anchorPoint.set(0.5, 1.0);
	
    },
 
    /* -----
 
    update the player pos
 
    ------ */
update: function(dt) { 
	//
	//
	// Handle Inputs
	//
	//
	if (me.input.isKeyPressed('left')) {
		this.doWalk("left");
		this.moving=true;
	} else if (me.input.isKeyPressed('right')) {
		this.doWalk("right");
		this.moving=true;
	} else if (me.input.isKeyPressed('up')) {
		this.doWalk("up");
		this.moving=true;
	} else if (me.input.isKeyPressed('down')) {
		this.doWalk("down");
		this.moving=true;
	} else {
		this.doStand();
		this.moving=false;
	};
	if (me.input.isKeyPressed('action')) {
		this.actionActive = true;
	} else {
		this.actionActive = false;
	} 
	if (me.input.isKeyPressed('interact')) {
		this.interationActive = true;
	} else {
		this.interationActive = false;
	} 
	
	if(this.moving == true) {
		if (!this.renderable.isCurrentAnimation("walk")) {
			this.renderable.setCurrentAnimation("walk");
		}
		this.body.update(dt);
	} else {
		if (!this.renderable.isCurrentAnimation("stand")) {
			this.renderable.setCurrentAnimation("stand");
		}
	}
	
	//
	//
	// check collision
	//
	//
	me.collision.check(this);
	
	// update player movement
	return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
	},
	
	onCollision : function (response, other) {
		var colide = false;
		switch (response.b.body.collisionType) {
			case me.collision.types.WORLD_SHAPE:
				colide = true;
				break;
			case me.collision.types.ENEMY_OBJECT:
				colide = true;
				break;
			case me.collision.types.ACTION_OBJECT:
				colide = true;
				break;
			default:
				colide = false;
		};
		return colide
	},	
	doWalk: function(newDirection){
		//
		// facing
		//
		if (newDirection == 'left') {
			if (this.facing='right') {
				this.facing="left";	
				this.renderable.flipX(false);
				}
		};
		if (newDirection == "right") {
			if (this.facing="left") {
				this.facing="right";
				this.renderable.flipX(true);
			}
		};
		//
		// moving
		//
	    this.direction=newDirection;
	    if (this.direction == "left") {
	       this.body.vel.x +=  -this.body.accel.x * me.timer.tick;
	    } else if (this.direction == "right") {
	       this.body.vel.x +=  this.body.accel.x * me.timer.tick;
	    } else if (this.direction == "up") {
	       this.body.vel.y +=  -this.body.accel.y * me.timer.tick;
	    } else if (this.direction == "down") {
	       this.body.vel.y +=  this.body.accel.y * me.timer.tick;
	    }
	}, 
    doStand : function() {
        this.body.vel.y = 0;
		this.body.vel.x = 0;
    },
    // Receive Damage
       doDamage: function(attacker,hci,damage) {
       		// calculate hc and do damage;   		
       		this.hp -= damage;
       		//me.game.HUD.setItemValue("hp", this.hp);
       		// little bounce
    		if (attacker.direction == "left") {
    			this.pos.x-=10
    		}; 
    		if (attacker.direction == "right") {
    			this.pos.x+=10
    		};
    		if (attacker.direction == "up") {
    			this.pos.y-=10
    		};
    		if (attacker.direction == "down") { 
    			this.pos.y+=10
    		};
    		// check if die
    		if (this.hp <= 0){
    		    this.stage = "dead"
                me.game.remove(this);
    		}
    	}
});
