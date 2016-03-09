/**
 * @author RCordeiro
 */

  
var weaponEntity = me.Entity.extend({
init: function(x, y, settings) {
	this._super(me.Entity, 'init',[x, y, settings]);
	//settings
	var settings = {};
	settings.type='weapon';
	settings.spritewidth = 16;
	settings.spriteheight = 16;
	settings.image = "items";
	settings.height = 16;
	settings.width = 16;
	this._super(me.Entity, 'init',[x, y, settings]);
    
	// get props
	this.damage = settings.damage;
	this.swingspeed = settings.swingspeed;
	
    // set props
    this.status = "stop"; //stop, swing, attack
    this.direction = "left";
	
    this.entityEquip = {};
	this.body.collisionType = me.collision.types.ACTION_OBJECT;
	    
    //animation
    this.renderable.animationspeed = this.swingspeed;
    this.renderable.addAnimation("idle",[242]);
    this.renderable.addAnimation("swing",[242,242]);
    this.renderable.setCurrentAnimation ("idle");
    
    },
 

    /* -----
 
    update
 
    ------ */
   update: function(dt) { 
	   	if (this.entityEquip.facing == "left"){
	   		this.pos.x= this.entityEquip.pos.x - 5;
 			this.pos.y= this.entityEquip.pos.y - 10;	
 			this.direction = "left"
	   	};
	   	if (this.entityEquip.facing == "right" ){
	   		this.pos.x= this.entityEquip.pos.x + 5;
 			this.pos.y= this.entityEquip.pos.y + 10;
 			this.direction = "right"	
	   	}
		this.updateme = true;
		// rotate sword
		if (this.direction == "left") {
			this.angle = Number.prototype.degToRad(0);
		};
		if (this.direction == "right") {
			this.angle = Number.prototype.degToRad(90);
		};
		// check if need to swing;
		if (this.entityEquip.actionActive == true) {
			this.status="swing";
		    this.renderable.setCurrentAnimation("swing", this.OnAfterSwing());
		};	
//
// check collision
//
//
me.collision.check(this);
// update movement
return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
			
},
	
	
onCollision : function (response, other) {
	var colide = false;
	switch (response.b.body.collisionType) {
		case me.collision.types.WORLD_SHAPE:
			colide = true;
			this.randomlenght = 0;
			break;
		case me.collision.types.ENEMY_OBJECT:
			colide = true;
			if(this.status == "attack") {
				res.obj.doDamage(this, this.hci, this.damage);
			}
			break;
		case me.collision.types.ACTION_OBJECT:
			colide = true;
			break;
		case me.collision.types.PLAYER_OBJECT:
			colide = true;
			this.doEquip(response.b)
			this.body.collisionType = me.collision.types.NO_OBJECT;
			break;
		default:
			colide = false;
	};
	return colide
},	
    
    OnAfterSwing: function() {
    	 //me.audio.play("swing");
		 this.renderable.setCurrentAnimation("idle");
		 this.status="attack";
			me.collision.check(this);
		 this.status="stop";
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
   },
   
doEquip: function(anchorEntity){
        this.entityEquip = anchorEntity;
        this.entityEquip.damage += this.damage;
        this.entityEquip.hci += this.hci;
        this.entityEquip.swingspeed += this.swingspeed;
        this.collidable = false;
    },
doUnEquip: function(){
        this.entityEquip = {};
        this.entityEquip.damage -= this.damage;
        this.entityEquip.hci -= this.hci;
        this.entityEquip.swingspeed -= this.swingspeed;
        this.collidable = true;
    },
}
);

