/**
 * @author RCordeiro
 */

  
var weaponEntity = me.Entity.extend({
init: function(x, y, settings) {
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
    this.status = "idle"; //idle, swing, attack
    this.direction = "left";
	this.angle = -45;
	
    this.entityEquip = {};
	this.body.collisionType = me.collision.types.ACTION_OBJECT;
	    
    //animation
    
    this.renderable.addAnimation("idle",[243]);
	this.renderable.addAnimation("swing",[300,301,302,301],200);
    this.renderable.setCurrentAnimation ("idle");
	this.renderable.angle = Number.prototype.degToRad(this.angle);
    },
 

    /* -----
 
    update
 
    ------ */
   update: function(dt) { 
	   	if (this.entityEquip.facing == "left"){
	   		this.pos.x= this.entityEquip.pos.x - 11;
 			this.pos.y= this.entityEquip.pos.y + 8;	
 			this.direction = "left"
	   	};
	   	if (this.entityEquip.facing == "right" ){
	   		this.pos.x= this.entityEquip.pos.x + 19;
 			this.pos.y= this.entityEquip.pos.y + 8;
 			this.direction = "right"	
	   	}
		// rotate sword
		if (this.direction == "left") {
			this.angle=-45;
		};
		if (this.direction == "right") {
			this.angle=-45+180;
		};
		this.renderable.angle = Number.prototype.degToRad(this.angle);
		// check if need to swing;
		if (this.entityEquip.actionActive == true && this.status == "idle") {
			if (!this.renderable.isCurrentAnimation("swing")) {
				this.status="swing";
			var self = this;
			this.renderable.setCurrentAnimation("swing",function(){self.OnAfterSwing(self)});
			
			}
		};		
//this.OnAfterSwing(this)
// check collision
//
me.collision.check(this);
// update movement
return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
			
},
			
OnAfterSwing: function(thiss) {
	//me.audio.play("swing");
	thiss.status="idle";
	thiss.renderable.setCurrentAnimation("idle");
	return true
},
	
	
onCollision : function (response, other) {
	var colide = false;
	switch (response.b.body.collisionType) {
		case me.collision.types.WORLD_SHAPE:
			colide = true;
			break;
		case me.collision.types.ENEMY_OBJECT:
			if(this.status == "attack") {
				colide = true;
				res.obj.doDamage(this, this.hci, this.damage);
			} else {
				colide = false;	
			}
			break;
		case me.collision.types.ACTION_OBJECT:
			colide = false;
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
		this.pos.x= this.entityEquip.pos.x - 14;
 		this.pos.y= this.entityEquip.pos.y + 8;
    },
doUnEquip: function(){
        this.entityEquip = {};
        this.entityEquip.damage -= this.damage;
        this.entityEquip.hci -= this.hci;
        this.entityEquip.swingspeed -= this.swingspeed;
    },
}
);

