/*----------------------
 
    Play Screen
 
  ----------------------*/
var playScreen = me.ScreenObject.extend({
    
    onResetEvent: function() {
	 // play the audio track
	//me.audio.playTrack("DST-InertExponent");
	
        // load a level
        me.levelDirector.loadLevel("MAP0101");
 
         // reserve player to a var
            var ents = me.game.getEntityByName("mainPlayer");
            var player = ents[0];
            
        // add a default HUD to the game mngr
        me.game.addHUD(0, 0, 320, 240);
 
        
        me.game.HUD.addItem("hp", new hpObject(50, 50));
        me.game.HUD.setItemValue("hp", 0);
 
        // make sure everyhting is in the right order
        me.game.sort();
 
    },
 
    /* ---
 
    action to perform when game is finished (state change)
 
    --- */
    onDestroyEvent: function() {
        // remove the HUD
        me.game.disableHUD();
	// stop the current audio track
	//me.audio.stopTrack();
    }
 
});