/*----------------------
 
    Play Screen
 
  ----------------------*/
var playScreen = me.ScreenObject.extend({
    
    onResetEvent: function() {
        
    	me.audio.playTrack("heroicdemise");
	
        this.loadLevel(currentLevel);
    
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
 
    },
    
    loadLevel: function(level) {
        // load a level
        me.levelDirector.loadLevel(level);
        // reserve player to a var
        var player = me.game.getEntityByName("mainPlayer")[0]; 
    },
    
    nextLevel: function(nextLevel, RespawnX, RespawnY){
       // Despawn Player
        var prevPlayer = player;
               
       //loadlevel
        this.loadLevel(nextLevel);
      
       // RespawnPlayer    
       this.RespawPlayer(player, prevPlayer, RespawnX, RespawnY);    
    },
    
    RespawnPlayer: function(currentPlayer,prevPlayer,x, y) {
        currentPlayer.pos.x=x;
        currentPlayer.pos.y=y;
        //prevPlayer;
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