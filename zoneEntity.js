var zoneEntity = me.Entity.extend({
/* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
    	this._super(me.Entity, 'init',[x, y, settings]);
    	this.level = settings.level;
    	this.mob = settings.mob;
    	this.mobcount = settings.mobcount;
		this.body.collisionType = me.collision.types.NO_OBJECT;
    }
});