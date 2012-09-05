/**
 * @author RCordeiro
 */

var weaponEntity = me.ObjectEntity.extend({
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    settings.spritewidth = 16;
    settings.spriteheight = 16;
    this.parent(x, y, settings);
    
    // set props
    this.type="weapon";
    this.status = "stop";
    this.direction = "left";
    this.entityEquip = {};
	this.collidable = true;
	this.damage = settings.damage;
	this.hci = settings.hci;
	this.swingspeed = settings.swingspeed;
	
    
    
    //animation
    this.animationspeed = this.swingspeed;
    this.addAnimation("idle",[0]);
    this.addAnimation("swing",[1,3]);
    this.setCurrentAnimation("idle");
    
    },
 

    /* -----
 
    update
 
    ------ */
   update: function() { 
	   	if (this.entityEquip.direction == "up"){
	   		this.pos.x= this.entityEquip.pos.x - 5;
 			this.pos.y= this.entityEquip.pos.y - 10;	
 			this.direction = "up"
	   	};
	   	if (this.entityEquip.direction == "down" ){
	   		this.pos.x= this.entityEquip.pos.x + 5;
 			this.pos.y= this.entityEquip.pos.y + 10;
 			this.direction = "down"	
	   	}
		if (this.entityEquip.direction == "left" ){
	   		this.pos.x= this.entityEquip.pos.x - 10;
 			this.pos.y= this.entityEquip.pos.y + 5;
 			this.direction = "left"	
	   	}
	   	if (this.entityEquip.direction == "right" ){
	   		this.pos.x= this.entityEquip.pos.x + 10;
 			this.pos.y= this.entityEquip.pos.y - 5;
 			this.direction = "right"	
	   	}
		this.updateme = true;
		// rotate sword
		if (this.direction == "up") {
			this.angle = Number.prototype.degToRad(0);
		};
		if (this.direction == "right") {
			this.angle = Number.prototype.degToRad(90);
		};
		if (this.direction == "down") {
			this.angle = Number.prototype.degToRad(180);
		};           
		if (this.direction == "left") {
			this.angle = Number.prototype.degToRad(270);
		};
		
		// check if need to swing;
		if (this.entityEquip.swing == true && this.entityEquip.actionActive == true) {
		    this.setCurrentAnimation("swing",this.OnAfterSwing);
		};	
		this.parent();
		return true;
			
    },
    
    OnAfterSwing: function() {
    	 me.audio.play("swing");
    	 this.setCurrentAnimation("idle");
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

