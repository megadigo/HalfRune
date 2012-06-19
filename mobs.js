/**
 * @author RCordeiro
 */


var spiderEntity = me.ObjectEntity.extend({
/* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // set prods
    this.setVelocity(0.1, 0.1);
    this.gravity=0;
    this.updateme = true;
    this.collidable = true;
    this.direction = "left";
    this.nextrandom = 0;
	this.stance = "normal";
	this.hp = settings.hp;
	this.type = "mob";
	this.stage = "random"; //chase, attacking, dead, respawning

    me.debug.renderHitBox = false;
    
    //animation
    this.addAnimation("normal_up",[1384,1385]);
    this.addAnimation("normal_right",[1386,1387]);
    this.addAnimation("normal_down",[1388,1389]);
    this.addAnimation("normal_left",[1390,1391]);
    this.setCurrentAnimation(this.stance + "_" + this.direction);
    },
	/* -----
 
    interfaces
 
    ------ */
   
 	OnInteract: function(obj){	
  		this.updateme = true;	
  	},
  	
  	OnCollide: function(res,obj){
  		this.doChangeDirection(res,obj);
  		this.doBounce(res,obj);
  	},
   
    /* -----
 
    update the player pos
 
    ------ */
   
   update: function() { 
		
		// stage
	
		
		
		// move
			if (this.direction == "right"){
				this.vel.x= this.accel.x * me.timer.tick;
				this.vel.y = 0;	
				this.direction="right";
			};
			if (this.direction == "left"){
				this.vel.x= -this.accel.x * me.timer.tick
				this.vel.y = 0;
				this.direction="left";	
			};
			if (this.direction == "down"){
				this.vel.y= this.accel.y * me.timer.tick;
				this.vel.x = 0;
				this.direction="down";	
			};
			if (this.direction == "up"){
				this.vel.y= -this.accel.y * me.timer.tick
				this.vel.x = 0;
				this.direction="up";	
			};

		// check & update spider movement
		this.updateMovement();
		  		
  		// update animation if necessary
	    if (this.vel.x!=0 || this.vel.y!=0) {
            this.setCurrentAnimation(this.stance + "_" + this.direction);
            this.parent(this);
            return true;
	   	} else {
		 	return false;
		};
	},
	
	/* -----

    Change direction
 
    ------ */
   
   doChangeDirection: function(res,obj) {
   		if (res.x<0 && obj.vel.x<0){
			this.direction = "left";
		};
		if (res.x>0 && obj.vel.x>0){
			this.direction = "right";
		}
		if (res.y<0 && obj.vel.y<0){
			this.direction = "up";
		};
		if (res.y>0 && obj.vel.y>0){
			this.direction = "down";
		}
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
   doRandomMove: function(){
       
       
       
       
       
       
       
       
       
   },
   doAttack: function(){
       
       
       
       
   },
   doDamage: function(attacker,hci,damage) {
   		// calculate hc and do damage;   		
   		this.hp -= damage;
   		console.log('hp ' + this.hp);
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
		if (this.hp<=0){
		    this.collidable = false;
            me.game.remove(this);
		}
	}
}
)