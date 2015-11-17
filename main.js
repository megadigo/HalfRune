/*!
 *
 *   melonJS
 *   http://www.melonjs.org
 *   Porta - The Game
 *   megadigo - DigoSoft Productions
 *
 **/
// Global vars
 var player = {};
 var quests = {};
 
// game resources
var g_resources = [
	// our level tileset
	{name: "border",    				type: "image",  src: "data/sprites/border3.png"},
	{name: "creatures",  				type: "image",  src: "data/sprites/creatures.png"},
	{name: "classes",  					type: "image",  src: "data/sprites/classes.png"},
	{name: "fx",       					type: "image",  src: "data/sprites/fx.png"},
	{name: "items",    					type: "image",  src: "data/sprites/items.png"},
	{name: "tiles",        				type: "image",  src: "data/sprites/tiles.png"},
	{name: "world",        				type: "image",  src: "data/sprites/world.png"},
	{name: "metatiles24x24",            type: "image",	src: "data/sprites/metatiles24x24.png"},
	{name: "Florest",		            type: "tmx",	src: "data/Florest.tmx"}
	//{name: "heroicdemise",              type: "audio",     src: "data/sounds/",    channel:1},
	//{name: "fs_dirt_a",                 type: "audio",     src: "data/sounds/",    channel:1},
	//{name: "fs_dirt_b",                 type: "audio",     src: "data/sounds/",    channel:1},
	//{name: "sword_draw",                type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "sword_hit_metal_a",         type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "sword_hit_wood_a",          type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "sword_swing_a",             type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "swing",                     type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "male_pain_hit_1",           type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "coins_pickup",              type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "equip_accessory",           type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "town_b_loop",               type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "chest_wood_closed",         type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "chest_wood_open",           type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "door_wood_closed",          type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "door_wood_open",            type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "vase_break_a",              type: "audio",     src: "data/sounds/",    channel:1},
    //{name: "vase_break_b",              type: "audio",     src: "data/sounds/",    channel:1}
];

var jsApp	=
{
	/* ---

		Initialize the jsApp

		---			*/
	onload: function()
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
    loaded: function() {
    
  
	// set the "Play/Ingame" Screen Object
	me.state.set(me.state.PLAY, new playScreen());
     
	// set a global fading transition for the screen
	me.state.transition("fade", "#FFFFFF", 250);
     
	// add our player entity in the entity pool
	me.pool.register("mainPlayer", playerEntity);
	
	// add weapons
	me.pool.register("sword", weaponEntity);
	me.pool.register("axe", weaponEntity);
	
	// armors
	me.pool.register("helmet", helmetEntity);
	
	// add enemies
	me.pool.register("spider", spiderEntity);
	
	// add furnitures
	me.pool.register("chest", chestEntity);
	me.pool.register("bed", bedEntity);
	me.pool.register("portal", portalEntity);
	me.pool.register("fountain", fountainEntity);
	me.pool.register("chair", chairEntity);
	me.pool.register("table", tableEntity);
	me.pool.register("candle", candleEntity);
	me.pool.register("barrel", barrelEntity);
	me.pool.register("package", packageEntity);
	me.pool.register("vase", vaseEntity);
	
	// zones
	me.pool.register("mobzone", zoneEntity);
	
	
	// enable the keyboard
	me.input.bindKey(me.input.KEY.LEFT, "left");
	me.input.bindKey(me.input.KEY.RIGHT, "right");
	me.input.bindKey(me.input.KEY.UP, "up");
	me.input.bindKey(me.input.KEY.DOWN, "down");
	me.input.bindKey(me.input.KEY.Z, "action",true);
	me.input.bindKey(me.input.KEY.X, "interact",true);
 

    // Menu Screen
    me.state.change(me.state.PLAY,"Florest");  
 
}

}; // jsApp
//bootstrap :)
window.onReady(function()
{
	jsApp.onload();
});


