/*----------------------
 
    Play Screen
 
  ----------------------*/
var playScreen = me.ScreenObject.extend({
    
    onResetEvent: function(newlevel) {
        
    	me.audio.playTrack("heroicdemise");
	
        me.levelDirector.loadLevel(newlevel);
    
        // add a default HUD to the game mngr
        me.game.addHUD(0, 0, 320, 240);
      
        me.game.HUD.addItem("border", new borderObject(0,0))
        
        me.game.HUD.addItem("hp", new hpObject(5, 5));
        me.game.HUD.setItemValue("hp", 0);
        me.game.HUD.addItem("damage", new damageObject(50, 5));
        me.game.HUD.setItemValue("damage", "+3");
 
        me.game.HUD.addItem("armor", new armorObject(100, 5));
        me.game.HUD.setItemValue("armor", "100%");
 
         // quests
        var quests = new questEntity();
        me.game.add(quests);

        // make sure everyhting is in the right order
        me.game.sort();
         // reserve player to a var
        player = me.game.getEntityByName("mainPlayer")[0];   
		
		var mobzones = me.game.getEntityByName("mobzone");
        var mobzone = {};
        for (var i=0;i<mobzones.length;i++){
            mobzone=mobzones[i];
            var level = mobzone.level;
            var mob = mobzone.mob;
            var mobcount = mobzone.mobcount;
            for (var c=0;c<mobcount;c++){
                //me.game.add(me.entityPool.newInstanceOf(mob, this.x + 16, this.y), 1);
            }
        }
		
		
		
		
    },
    
    /*  
    action to perform when game is finished (state change)
 
    --- */
    onDestroyEvent: function() {
        // remove the HUD
        me.game.disableHUD();
	// stop the current audio track
	//me.audio.stopTrack();
    }
        
});
