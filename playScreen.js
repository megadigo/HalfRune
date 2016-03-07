/*----------------------
 
    Play Screen
 
  ----------------------*/
var playScreen = me.ScreenObject.extend({
    
    onResetEvent: function(newlevel) {
        
    	//me.audio.playTrack("heroicdemise");
	
        me.levelDirector.loadLevel(newlevel);
     		 
         // reserve player to a var
        player = me.game.world.getChildByName("mainPlayer")[0];   
		
		// mobzones
        var mobzones = me.game.world.getChildByName("mobzone");
        var mobzone = {};
		var newmob = {};
        for (var i=0;i<mobzones.length;i++){
            mobzone=mobzones[i];
            var level = mobzone.level;
            var mob = mobzone.mob;
            var mobcount = mobzone.mobcount;
            var mobzx = mobzone.pos.x;
            var mobzy = mobzone.pos.y;
			var mobzz = mobzone.z;
            var mobzw = mobzone.width;
            var mobzh = mobzone.height;
            for (var c=0;c<mobcount;c++){
                var mobx = mobzx + Math.round(Math.random() * mobzw,0);
                var moby = mobzy + Math.round(Math.random() * mobzh,0);
                newmob = me.pool.pull(mob, mobx, moby);
				newmob.hp=10;
                me.game.world.addChild(newmob, mobzz);
            }
        }
        me.game.world.sort();
    },
    
    /*  
    action to perform when game is finished (state change)
 
    --- */
	
    onDestroyEvent: function() {
        // remove the HUD
        //me.game.disableHUD();
	// stop the current audio track
	//me.audio.stopTrack();
    }
        
});
