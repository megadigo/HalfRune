/*------------------- 

a player entity

-------------------- */

var playerEntity = me.ObjectEntity.extend({
 
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
    // call the constructor
    this.parent(x, y, settings);
    
    // reserve player to global var
    player = this;
    
    
    // set the walking  and gravity
    this.setVelocity(2, 2);
    this.gravity=0;
    this.direction = "left";
    this.moving = false;
	this.stance = "normal";
	this.actionActive = false;
	this.collidable=true;
	//stats
	this.stage = "alive";
	this.hp = 100;
	this.mp = 40;
	this.str = 120;
	this.itl = 40;
	this.dex = 120
	this.damage = 0;
	this.hci = 0;
	this.swingspeed = 0;

	this.type = "player";

    //weapon
    this.swing = false;
    this.weapon = {};
    this.equipweapon = false;
    
    
    me.debug.renderHitBox = false;
    
    
    // head info
    
    this.hpValue = new me.Font('font8', 8, 'white');
    
    //animation
    this.addAnimation("normal_up",[0,1,2,3]);
    this.addAnimation("normal_right",[4,5,6,7]);
    this.addAnimation("normal_down",[8,9,10,11]);
    this.addAnimation("normal_left",[12,13,14,15]);
    this.setCurrentAnimation(this.stance + "_" + this.direction);
    
    // adjust the bounding box x,w,y,h
    this.updateColRect(5,10 , 5, 10);
 
    // set the display to follow our position on both axis
    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH);
 
    },
 
    /* -----
 
    update the player pos
 
    ------ */
   update: function() { 
        //
        //
		// Handle Inputs
		//
		//
		if (me.input.isKeyPressed('left')) {
		    this.doWalk("left");
		} else if (me.input.isKeyPressed('right')) {
		    this.doWalk("right");
		} else if (me.input.isKeyPressed('up')) {
			this.doWalk("up");
		} else if (me.input.isKeyPressed('down')) {
			this.doWalk("down");
		} else {
            this.doStand();
        };
		if (me.input.isKeyPressed('action')) {
			this.actionActive = true;
		} else {
		    this.actionActive = false;
		} 
	    //
	    //
		// check collision
		//
		//
		this.swing = true;
		res = me.game.collide(this);
		if (res)
		{	
		    // weapon collition
		    if (res.obj.type == "weapon") {
		        if (this.actionActive == true) {
		            this.swing = false;
    		        // unequip
    		        if(this.equipweapon){
    		          this.weapon.obj.doUnEquip();
    		          this.equipweapon = false;
    		        };
    		        // equip  
    		        this.weapon = res;
    		        res.obj.doEquip(this.GUID);
    		        this.equipweapon=true;
    		        console.log('damage ' + this.damage)
		        };
		    };
		    // mob collition
		    if (res.obj.type == "mob") {
		        this.swing = true;
		        res.obj.OnCollide(res,this);
		    }
		    // furniture collition
		    else if (res.obj.type == "furniture") {
                this.swing = true;
            }
		    // container collition
		    else if (res.obj.type == "container"){
		        this.swing = false;
    			// What do do if interacts
    			if (this.actionActive == true) {
    				res.obj.OnInteract(this);
    			};
    			// What to do if Collides
    			res.obj.OnCollide(res,this);
			}
			// npc
			else if (res.obj.type == "npc") {
			  this.swing = false;
			    
			}
			else {
			 this.swing = true;
			};
		};
		
		// update player movement
		if (this.moving == true) {
    	   this.updateMovement();
           this.parent(this);
           return true;
        } else {    
    	   return false	    
		}	
	},
	
	draw: function (context) 
	{    
	   //context.drawImage(me.loader.getImage("bar100"), this.pos.x - me.game.viewport.pos.x, this.pos.y - me.game.viewport.pos.y-(6+1));         
	   this.hpValue.draw(context, this.hp, this.pos.x - me.game.viewport.pos.x, this.pos.y - me.game.viewport.pos.y);
	   this.parent(context);
	},
	
	
	
	
	
	
	doWalk: function(newDirection){
	    this.moving = true;
	    me.audio.play((Math.Random<0.5) ? "fs_dirt_a": "fs_dirt_b")
	    this.direction=newDirection;
	    if (this.direction == "left") {
	       this.vel.x +=  -this.accel.x * me.timer.tick
	    } else if (this.direction == "right") {
	       this.vel.x +=  this.accel.x * me.timer.tick
	    } else if (this.direction == "up") {
	       this.vel.y +=  -this.accel.y * me.timer.tick
	    } else if (this.direction == "down") {
	       this.vel.y +=  this.accel.y * me.timer.tick
	    }
	    this.setCurrentAnimation(this.stance + "_" + this.direction)
	}, 
    doStand : function(up) {
        this.moving = false;
        this.vel.y = 0;
		this.vel.x = 0;
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
                me.game.remove(this);
    		}
    	}
});
