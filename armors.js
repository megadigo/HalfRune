/**
 * @author RCordeiro
 */

var helmetEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.type = "armor";
        //settings.image = "items";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this._super(me.Entity, 'init',[x, y, settings]);
        
        // set props
        this.collidable = true;
        this.status = "stand";
        //animation
        this.renderable.addAnimation("stand",[515]);
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
