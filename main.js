/*!
 *
 *   melonJS
 *   http://www.melonjs.org
 *   Porta - The Game
 *   megadigo - DigoSoft Productions
 *
 **/
// Global vars

// game resources
var g_resources = [
	// our level tileset
	{name: "u6tiles",			type: "image",		src: "data/sprites/u6tiles.png"},
	{name: "avatar",	    	type: "image",	    src: "data/sprites/avatar.png"},
	{name: "sword",             type: "image",      src: "data/sprites/sword.png"},
	{name: "axe",               type: "image",      src: "data/sprites/axe.png"},
	{name: "hud",               type: "image",      src: "data/sprites/hud.png"},
	{name: "font16px",          type: "image",      src: "data/sprites/font.png"},
	{name: "metatiles16x16",    type: "image",	    src: "data/sprites/metatiles16x16.png"},
	{name: "MAP0101",		    type: "tmx",	    src: "data/MAP0101.tmx"},
	{name: "swing",             type: "audio",      src: "data/sounds/",              channel:2},
	{name: "heroicdemise",      type: "audio",      src: "data/sounds/",              channel:1}
];

var jsApp	=
{
	/* ---

		Initialize the jsApp

		---			*/
	onload: function()
	{

		// init the video
		if (!me.video.init('jsapp',320, 240, true, 1))
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
	me.state.set(me.state.PLAY, new playScreen());
     
	// set a global fading transition for the screen
	me.state.transition("fade", "#FFFFFF", 250);
     
	// add our player entity in the entity pool
	me.entityPool.add("mainPlayer", playerEntity);
	me.entityPool.add("sword", weaponEntity);
	me.entityPool.add("axe", weaponEntity);
	
	
	// add enemies
	me.entityPool.add("spider", spiderEntity);
	
	// add to entities
	me.entityPool.add("chest", chestEntity);
	me.entityPool.add("bed", bedEntity);
	me.entityPool.add("porta", portaEntity);
	
	// enable the keyboard
	me.input.bindKey(me.input.KEY.A, "left");
	me.input.bindKey(me.input.KEY.D, "right");
	me.input.bindKey(me.input.KEY.W, "up");
	me.input.bindKey(me.input.KEY.S, "down");
	me.input.bindKey(me.input.KEY.P, "action",true);
     
	// display the menu title
	me.audio.playTrack("heroicdemise");
	me.state.change(me.state.PLAY);
}

}; // jsApp

//bootstrap :)
window.onReady(function()
{
	jsApp.onload();
});
