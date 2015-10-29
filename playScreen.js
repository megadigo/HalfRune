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
 
         // quests
        var quests = new questEntity();
        me.game.add(quests);

        // make sure everyhting is in the right order
        me.game.sort();
         // reserve player to a var
        player = me.game.getEntityByName("mainPlayer")[0];   
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
