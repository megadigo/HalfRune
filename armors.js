/**
 * @author RCordeiro
 */

var helmetEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.type = "container";
        //settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this.parent(x, y, settings);  
        
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
