/*----------------------
 
    Play Screen
 
  ----------------------*/
var playScreen = me.ScreenObject.extend({
    
    onResetEvent: function() {
	 // play the audio track
	//me.audio.playTrack("DST-InertExponent");
	
        // load a level
        me.levelDirector.loadLevel("MAP0101");
 
        // add a default HUD to the game mngr
        //me.game.addHUD(0, 430, 640, 60);
 
        // add a new HUD item
        //me.game.HUD.addItem("score", new ScoreObject(620, 10));
 
        // make sure everyhting is in the right order
        //me.game.sort();
 
    },
 
    /* ---
 
    action to perform when game is finished (state change)
 
    --- */
    onDestroyEvent: function() {
        // remove the HUD
        //me.game.disableHUD();
	// stop the current audio track
	//me.audio.stopTrack();
    }
 
});