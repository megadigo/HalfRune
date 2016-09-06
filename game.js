/*!
 *
 *   melonJS
 *   http://www.melonjs.org
 *   HalfRune - The Game
 *   megadigo - DigoSoft Productions
 *
 **/



var player = {};
var quests = {};

var game = {
	
	data : {
        // score
        score : 0

    },

	
	"onload": function()
	{

		// init the video
		if (!me.video.init(640, 480, {wrapper : "screen", scale : "auto"}))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
			return;
		}
		
		// add "#debug" to the URL to enable the debug Panel
		if (me.game.HASH.debug === true) {
		  window.onReady(function () {
			me.plugin.register.defer(this, me.debug.Panel, "debug", me.input.KEY.V);
		  });
		}
	

		// initialize the "audio"
		if (!me.audio.init("mp3,ogg")) {
			alert("Sorry but your browser does not support html 5 audio !");
			return;
		}

		// set all resources to be loaded
		me.loader.onload = this.loaded.bind(this);

		// set all resources to be loaded
		me.loader.preload(g_resources);

		// load everything & display a loading screen
		me.state.change(me.state.LOADING);
	},


	/* ---

		callback when everything is loaded

		---										*/
	/* ---
 
    callback when everything is loaded
 
    --- */
    "loaded": function() {
    
	// set title screen
	//me.state.set(me.state.PLAY, new titleScreen());
	
	// set the "Play/Ingame" Screen Object
	me.state.set(me.state.PLAY, new playScreen());
	
	
     
	// set a global fading transition for the screen
	me.state.transition("fade", "#FFFFFF", 250);
     
	// add our player entity in the entity pool
	me.pool.register("mainPlayer", playerEntity);
	
	// add enemies
	me.pool.register("spider", spiderEntity);
	
	// zones
	me.pool.register("mobzone", zoneEntity);
	
	//objects
	me.pool.register("weapon", weaponEntity);
	
	// enable the keyboard
	me.input.bindKey(me.input.KEY.LEFT, "left");
	me.input.bindKey(me.input.KEY.RIGHT, "right");
	me.input.bindKey(me.input.KEY.UP, "up");
	me.input.bindKey(me.input.KEY.DOWN, "down");
	me.input.bindKey(me.input.KEY.Z, "action",true);
	me.input.bindKey(me.input.KEY.X, "interact",true);
 

    // Menu Screen
    //me.state.change(me.state.PLAY,"Florest");  
	me.state.change(me.state.PLAY,"room0");  
 
}

}; 