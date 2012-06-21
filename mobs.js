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
    this.spritedirection = "left";
	this.stance = "normal";
	this.hp = settings.hp;
	this.type = "mob";
	this.stage = "random"; //chase, attack, dead, respawn
	this.randomlenght = 0;
	this.respawnX=this.pos.x;
	this.respawnY=this.pos.y;
	this.sensedistance = 64;

    me.debug.renderHitBox = false;
    
    //animation
    this.addAnimation("normal_up",[1384,1385]);
    this.addAnimation("normal_right",[1386,1387]);
    this.addAnimation("normal_down",[1388,1389]);
    this.addAnimation("normal_left",[1390,1391]);
    this.addAnimation("normal_stand",[1000]);
    this.setCurrentAnimation(this.stance + "_" + this.direction);
    },
	/* -----
 
    interfaces
 
    ------ */
   
 	OnInteract: function(obj){	
  		this.updateme = true;	
  	},
  	
  	OnCollide: function(res,obj){
  		//this.doChangeDirection(res,obj);
  		this.doBounce(res,obj);
  	},
   
    /* -----
 
    update the player pos
 
    ------ */
   
   update: function() { 
		
		// do stage
    		if (this.stage == "random")   this.doRandomWalk();
    		if (this.stage == "chase")    this.doChaseWalk();
    		if (this.stage == "attack")   this.doAttack();
    		if (this.stage == "dead")     this.doDead();
    		if (this.stage == "respawn")  this.doRespawn();
		
		// move
			if (this.direction == "right"){
				this.vel.x= this.accel.x * me.timer.tick;
				this.vel.y = 0;	
			};
			if (this.direction == "left"){
				this.vel.x= -this.accel.x * me.timer.tick
				this.vel.y = 0;
			};
			if (this.direction == "down"){
				this.vel.y= this.accel.y * me.timer.tick;
				this.vel.x = 0;			
			};
			if (this.direction == "up"){
				this.vel.y= -this.accel.y * me.timer.tick
				this.vel.x = 0;
			};
			if (this.direction == "stand"){
                this.vel.y = 0
                this.vel.x = 0;
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
   
   
   // STAGES
    doRandomWalk: function (){
       if (this.randomlenght == 0){
            this.randomlenght = 200 + Math.round(Math.random()*100,0);
            switch (Math.round(Math.random() * 4,0)){
                case 0: 
                    this.direction="left";
                    break;
                case 1:
                    this.direction="right";
                    break;
                case 2:
                    this.direction="up";
                    break;
                case 3:
                    this.direction="down";
                    break;
           }
       } else {
           this.randomlenght -=1;
       };
      // test if player is near
    
     var distplayer = this.distanceTo(player)
     
     if (distplayer<=this.sensedistance) {
         this.stage = "chase"
         
     }
       
       
       
   },
   doChaseWalk: function (){
       
       if (this.pos.x > player.pos.x){
           this.direction = "left"          
       } else if (this.pos.x < player.pos.x){
           this.direction = "right"
       } else if (this.pos.y > player.pos.y){
           this.direction = "up"
       } else if (this.pos.y < player.pos.y){
           this.direction = "down"
       }
   },

   doAttack: function(){
       
   },
   doDead: function(){
       this.randomlenght = 0
       this.collidable = false;
       this.direction="stand";
       if (this.randomlenght == 0){
            this.stage = "respawn"
       } else {
           this.randomlenght -=1
       };
   },
   doRespawn: function(){
         this.pos.x =  (this.respawnX - 64) + (Math.random() * 128)
         this.pos.y =  (this.respawnY - 64) + (Math.random() * 128);
         this.direction ="left";
         this.stage = "random";
         this.hp = Math.random() * 50;
         this.collidable = true;
   },
  
   // Receive Damage
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
    		    this.stage = "dead"
                //me.game.remove(this);
    		}
    	}
}
)
