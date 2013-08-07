var zoneEntity = me.ObjectEntity.extend({
/* -----
 
    constructor
 
    ------ */
    init: function(x, y, settings) {
    	settings.image = "u6tiles";
    	settings.spritewidth = 16;
    	settings.spriteheight = 16;
    	this.parent(x, y, settings);
    	this.level = settings.level;
    	this.mob = settings.mob;
    	this.mobcount = settings.mobcount;
    },
    update: function() { 
		this.parent(this);
    	return true;
    }
});