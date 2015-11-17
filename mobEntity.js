/**
 * @author RCordeiro
 */

var exampleEntity = me.mobEntity.extend({

    init: function(x, y, settings) {
    	this._super(me.Entity, 'init',[x, y, settings]);
    	//animation
	    this.renderable.addAnimation("normal_up",[1384,1385]);
	    this.renderable.addAnimation("normal_right",[1386,1387]);
	    this.renderable.addAnimation("normal_down",[1388,1389]);
	    this.renderable.addAnimation("normal_left",[1390,1391]);
	    this.renderable.addAnimation("normal_stand",[1000]);
	    this.renderable.setCurrentAnimation(this.stance + "_" + this.direction);    	
    },
    
   	update: function() {
   		this.parent()	
   	}
 })





var mobEntity = me.Entity.extend({
	init: function(x, y, settings) {
	// call the constructor
    this._super(mobEntity, 'init',[x, y, settings]);
    
    // ENTITY VARS
    this.type=				settings.type;
    this.spritewidth=		settings.spritewidth;
    this.spriteheight=		settings.spriteheight;
    this.image=				settings.image;
    
    this.setVelocity(		settings.setVelocityX, 
    				 		settings.setVelocityY);
    
    
    this.collidable = 		settings.collidable;
    this.direction = 		settings.direction;
    this.spritedirection = 	settings.spritedirection;
	this.hp = 				settings.hp;
	this.damage =			settings.damage;
	this.stage = 			settings.stage;
	this.sensedistance = 	settings.sensedistance;
    
    //inner vars
    this.randomlenght = 	0;
    this.respawnX=			this.pos.x;
	this.respawnY=			this.pos.y;
    this.updateme = 		true;
	this.gravity=			0;	
	me.debug.renderHitBox = false
	},
	update: function() { 
		
	}
}
)