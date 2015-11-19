/**
 * @author megadigo
 */
var chestEntity = me.Entity.extend({
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "items";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(me.Entity, 'init',[x, y, settings]);
        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        this.updateme = true;
        //animation
        this.renderable.addAnimation("open",[619]);
        this.renderable.addAnimation("close",[620]);
        this.renderable.setCurrentAnimation("close");
    },
 
   	OnInteract: function(obj){
   		if (this.status=="close"){
   		    me.audio.play("chest_wood_open");
   			this.renderable.setCurrentAnimation("open");
   			this.status="open"	
   		} else {
   			me.audio.play("chest_wood_closed");
   			this.renderable.setCurrentAnimation("close");
   			this.status="close"
   		};	
  		this.updateme = true;	
  	},
  	OnCollide: function(res,obj){
  		this.doBounce(res,obj);
  	},
 
    /* -----
 
    update
 
    ------ */
   update: function() { 
		return this.updateme ;
		// check & update player movement
		this.updateme = false;
    },

    /* -----

    bounce
 
    ------ */
   doBounce: function(res,obj) {
   		if (res.pos.x<0 && obj.body.vel.x<0){
			obj.body.vel.x = 0;
		};
		if (res.pos.x>0 && obj.body.vel.x>0){
			obj.body.vel.x = 0;
		}
		if (res.y<0 && obj.body.vel.y<0){
			obj.body.vel.y = 0;
		};
		if (res.y>0 && obj.body.vel.y>0){
			obj.body.vel.y = 0;
		}
   }
}
);

var vaseEntity = me.Entity.extend({
    init: function(x, y, settings) {
    // call the constructor
    settings.image = "u6tiles";
    settings.spritewidth = 16;
    settings.spriteheight = 16;
    this._super(vaseEntity, 'init',[x, y, settings]);
    
    // set props
    this.type="container";
    this.collidable = true;
    this.status = "close";
    //animation
    this.renderable.addAnimation("close",[755]);
    this.renderable.setCurrentAnimation("close");
    
    
    
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
    doBounce: function(res,obj) {
        if (res.pos.x<0 && obj.body.vel.x<0){
            obj.body.vel.x = 0;
        };
        if (res.pos.x>0 && obj.body.vel.x>0){
            obj.body.vel.x = 0;
        }
        if (res.y<0 && obj.body.vel.y<0){
            obj.body.vel.y = 0;
        };
        if (res.y>0 && obj.body.vel.y>0){
            obj.body.vel.y = 0;
        }
   }, 
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});

var barrelEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(barrelEntity, 'init',[x, y, settings]);

        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        //animation
        this.renderable.addAnimation("close",[757]);
        this.renderable.setCurrentAnimation("close");
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
    doBounce: function(res,obj) {
        if (res.pos.x<0 && obj.body.vel.x<0){
            obj.body.vel.x = 0;
        };
        if (res.pos.x>0 && obj.body.vel.x>0){
            obj.body.vel.x = 0;
        }
        if (res.y<0 && obj.body.vel.y<0){
            obj.body.vel.y = 0;
        };
        if (res.y>0 && obj.body.vel.y>0){
            obj.body.vel.y = 0;
        }
   }, 
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});

var packageEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(packageEntity, 'init',[x, y, settings]);
        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        //animation
        this.renderable.addAnimation("close",[758]);
        this.renderable.setCurrentAnimation("close");
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
    doBounce: function(res,obj) {
        if (res.x<0 && obj.body.vel.x<0){
            obj.body.vel.x = 0;
        };
        if (res.x>0 && obj.body.vel.x>0){
            obj.body.vel.x = 0;
        }
        if (res.y<0 && obj.body.vel.y<0){
            obj.body.vel.y = 0;
        };
        if (res.y>0 && obj.body.vel.y>0){
            obj.body.vel.y = 0;
        }
   }, 
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});
