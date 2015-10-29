/**
 * @author megadigo
 */ 
var portalEntity = me.ObjectEntity.extend({
    init: function(x, y, settings) {
        // call the constructor
        settings.image = "u6tiles";
        settings.spritewidth = 16;
        settings.spriteheight = 16;
        this.parent(x, y, settings);
        
        // set props
        this.type="portal";
        this.collidable = true;
        this.status = "stand";
        //animation
        this.addAnimation("stand",[650]);
        this.setCurrentAnimation("stand");
    },
    OnInteract: function(obj){
        
    },
    OnCollide: function(res,obj){
        me.state.change(me.state.PLAY,"CAVE0101");  
        //this.doBounce(res,obj);
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