/**
 * @author RCordeiro
 */

var weaponEntity = me.ObjectEntity.extend({
init: function(x, y, settings) {
//settings
	var settings = {};
	settings.type='weapon';
	settings.spritewidth = 24;
	settings.spriteheight = 24;
	settings.image = "items";
	settings.height = 24;
	settings.width = 24;
	this._super(me.Entity, 'init',[x, y, settings]);
    
	// get props
	this.damage = settings.damage;
	this.swingspeed = settings.swingspeed;
	
    // set props
    this.status = "stop";
    this.direction = "left";
	
    this.entityEquip = {};
	this.body.collisionType = me.collision.types.ACTION_OBJECT;
	    
    //animation
    this.renderable.animationspeed = this.swingspeed;
    this.renderable.addAnimation("idle",[100]);
    this.renderable.addAnimation("swing",[100,101]);
    this.renderable.setCurrentAnimation ("idle");
    
    },
 

    /* -----
 
    update
 
    ------ */
   update: function() { 
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
		    this.renderable.setCurrentAnimation("swing", this.OnAfterSwing());
		    
		};	
		this.parent();
		return true;
			
    },
    
    OnAfterSwing: function() {
    	 me.audio.play("swing");
		 this.renderable.setCurrentAnimation("idle");
    	 //check collition
		res = me.game.collide(this);
		if (res)
		{
			// enemy collition
		    if (res.obj.type == "mob") {
		        //me.audio.play("sword_hit_metal_a");
		        res.obj.doDamage(this, this.hci, this.damage);
		    }	
		};
		return false;
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
   
   doEquip: function(guid){
        this.entityEquip = me.game.getEntityByGUID(guid);
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

