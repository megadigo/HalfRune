/*!
 *
 *   melonJS
 *   http://www.melonjs.org
 *   Porta - The Game
 *   megadigo - DigoSoft Productions
 *
 **/

//game resources

// game resources
var g_resources = [
	// our level tileset
	{name: "u6tiles",			type: "image",		src: "data/sprites/u6tiles.png"},
	{name: "avatar",	    	type: "image",	    src: "data/sprites/avatar.png"},
	{name: "metatiles16x16",    type: "image",	    src: "data/sprites/metatiles16x16.png"},
	{name: "MAP0101",		    type: "tmx",	    src: "data/MAP0101.tmx"}
];

var jsApp	=
{
	/* ---

		Initialize the jsApp

		---			*/
	onload: function()
	{

		// init the video
		if (!me.video.init('jsapp',320, 240, false, 1.0))
		{
			alert("Sorry but your browser does not support html 5 canvas.");
	 return;
		}

		// initialize the "audio"
		me.audio.init("mp3,ogg");

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
    loaded: function() {
     
	// set the "Play/Ingame" Screen Object
	me.state.set(me.state.PLAY, new PlayScreen());
     
	// set a global fading transition for the screen
	me.state.transition("fade", "#FFFFFF", 250);
     
	// add our player entity in the entity pool
	me.entityPool.add("mainPlayer", PlayerEntity);
	me.entityPool.add("spider", SpiderEntity);
	
	// add to entities
	me.entityPool.add("chest", chest);
	me.entityPool.add("bedup", bedup);
	me.entityPool.add("beddown", beddown);
	
	// enable the keyboard
	me.input.bindKey(me.input.KEY.A, "left");
	me.input.bindKey(me.input.KEY.D, "right");
	me.input.bindKey(me.input.KEY.W, "up");
	me.input.bindKey(me.input.KEY.S, "down");
	me.input.bindKey(me.input.KEY.P, "action",true);
     
	// display the menu title
	me.state.change(me.state.PLAY);
}

}; // jsApp

//bootstrap :)
window.onReady(function()
{
	jsApp.onload();
});
