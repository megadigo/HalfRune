/**
 * @author megadigo
 */
var chestEntity = me.ObjectEntity.extend({
    /* -----
 
    constructor
 
    ------ */
   
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this.parent(x, y, settings);
        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        this.updateme = true;
        //animation
        this.addAnimation("open",[619]);
        this.addAnimation("close",[620]);
        this.setCurrentAnimation("close");
    },
 
   	OnInteract: function(obj){
   		if (this.status=="close"){
   		    me.audio.play("chest_wood_open");
   			this.setCurrentAnimation("open");
   			this.status="open"	
   		} else {
   			me.audio.play("chest_wood_closed");
   			this.setCurrentAnimation("close");
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
   }
}
);

var vaseEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
    // call the constructor
    settings.image = "u6tiles";
    settings.spritewidth = 16;
    settings.spriteheight = 16;
    this.parent(x, y, settings);
    
    // set props
    this.type="container";
    this.collidable = true;
    this.status = "close";
    //animation
    this.addAnimation("close",[755]);
    this.setCurrentAnimation("close");
    
    
    
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
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
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});

var barrelEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this.parent(x, y, settings);

        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        //animation
        this.addAnimation("close",[757]);
        this.setCurrentAnimation("close");
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
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
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});

var packageEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this.parent(x, y, settings);
        // set props
        this.type="container";
        this.collidable = true;
        this.status = "close";
        //animation
        this.addAnimation("close",[758]);
        this.setCurrentAnimation("close");
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        this.doBounce(res,obj);
    }, 
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
   update: function() { 
        return true;
   },
    draw: function (context) 
    {    
       this.parent(context);
    },
    
});
