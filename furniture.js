/**
 * @author megadigo
 */
var bedEntity = me.Entity.extend({
 
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
        this.type="furniture";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[711]);
        this.renderable.setCurrentAnimation("stand");
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
    }
}
);
var chairEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(chairEntity, 'init',[x, y, settings]);
        
        // set props
        this.type="furniture";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[701]);
        this.renderable.setCurrentAnimation("stand");
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
var tableEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(tableEntity, 'init',[x, y, settings]);
        
        // set props
        this.type="furniture";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[741]);
        this.renderable.setCurrentAnimation("stand");
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
var candleEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(candleEntity, 'init',[x, y, settings]);
        
        // set props
        this.type="furniture";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[648]);
        this.renderable.setCurrentAnimation("stand");
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
var fountainEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(fountainEntity, 'init',[x, y, settings]);
        // set props
        this.type="furniture";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[796]);
        this.renderable.setCurrentAnimation("stand");
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





