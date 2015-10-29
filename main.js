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
	{name: "border",                    type: "image",     src: "data/sprites/border3.png"},
	{name: "u6tiles",			        type: "image",	   src: "data/sprites/u6tiles.png"},
	{name: "cave",                      type: "image",     src: "data/sprites/cave.png"},
	{name: "avatar",	    	        type: "image",	   src: "data/sprites/avatar.png"},
	{name: "sword",                     type: "image",     src: "data/sprites/sword.png"},
	{name: "hp",                        type: "image",     src: "data/sprites/hp.png"},
    {name: "coin",                      type: "image",     src: "data/sprites/coin_copper.png"},	
	{name: "armor",                     type: "image",     src: "data/sprites/armor.png"},
	{name: "damage",                    type: "image",     src: "data/sprites/damage.png"},
	{name: "axe",                       type: "image",     src: "data/sprites/axe.png"},
	{name: "font16",                    type: "image",     src: "data/sprites/font16.png"},
	{name: "font8",                     type: "image",     src: "data/sprites/font8.png"},
	{name: "bar100",		            type: "image",     src: "data/sprites/bar100.png"},
	{name: "metatiles16x16",            type: "image",	   src: "data/sprites/metatiles16x16.png"},
	{name: "MAP0101",		            type: "tmx",	   src: "data/MAP0101.tmx"},
	{name: "CAVE0101",                  type: "tmx",       src: "data/CAVE0101.tmx"},
	{name: "heroicdemise",              type: "audio",     src: "data/sounds/",    channel:1},
	{name: "fs_dirt_a",                 type: "audio",     src: "data/sounds/",    channel:1},
	{name: "fs_dirt_b",                 type: "audio",     src: "data/sounds/",    channel:1},
	{name: "sword_draw",                type: "audio",     src: "data/sounds/",    channel:1},
    {name: "sword_hit_metal_a",         type: "audio",     src: "data/sounds/",    channel:1},
    {name: "sword_hit_wood_a",          type: "audio",     src: "data/sounds/",    channel:1},
    {name: "sword_swing_a",             type: "audio",     src: "data/sounds/",    channel:1},
    {name: "swing",                     type: "audio",     src: "data/sounds/",    channel:1},
    {name: "male_pain_hit_1",           type: "audio",     src: "data/sounds/",    channel:1},
    {name: "coins_pickup",              type: "audio",     src: "data/sounds/",    channel:1},
    {name: "equip_accessory",           type: "audio",     src: "data/sounds/",    channel:1},
    {name: "town_b_loop",               type: "audio",     src: "data/sounds/",    channel:1},
    {name: "chest_wood_closed",         type: "audio",     src: "data/sounds/",    channel:1},
    {name: "chest_wood_open",           type: "audio",     src: "data/sounds/",    channel:1},
    {name: "door_wood_closed",          type: "audio",     src: "data/sounds/",    channel:1},
    {name: "door_wood_open",            type: "audio",     src: "data/sounds/",    channel:1},
    {name: "vase_break_a",              type: "audio",     src: "data/sounds/",    channel:1},
    {name: "vase_break_b",              type: "audio",     src: "data/sounds/",    channel:1}
];

var jsApp	=
{
	/* ---

		Initialize the jsApp

		---			*/
	onload: function()
	{

		// init the video
		if (!me.video.init('jsapp',320, 240, true, 1.2))
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
	
	// add weapons
	me.entityPool.add("sword", weaponEntity);
	me.entityPool.add("axe", weaponEntity);
	
	// armors
	me.entityPool.add("helmet", helmetEntity);
	
	// add enemies
	me.entityPool.add("spider", spiderEntity);
	
	// add furnitures
	me.entityPool.add("chest", chestEntity);
	me.entityPool.add("bed", bedEntity);
	me.entityPool.add("portal", portalEntity);
	me.entityPool.add("fountain", fountainEntity);
	me.entityPool.add("chair", chairEntity);
	me.entityPool.add("table", tableEntity);
	me.entityPool.add("candle", candleEntity);
	me.entityPool.add("barrel", barrelEntity);
	me.entityPool.add("package", packageEntity);
	me.entityPool.add("vase", vaseEntity);
	
	// enable the keyboard
	me.input.bindKey(me.input.KEY.LEFT, "left");
	me.input.bindKey(me.input.KEY.RIGHT, "right");
	me.input.bindKey(me.input.KEY.UP, "up");
	me.input.bindKey(me.input.KEY.DOWN, "down");
	me.input.bindKey(me.input.KEY.Z, "action",true);
	me.input.bindKey(me.input.KEY.X, "interact",true);
 

    // Menu Screen
    me.state.change(me.state.PLAY,"MAP0101");  
 
}

}; // jsApp

//bootstrap :)
window.onReady(function()
{
	jsApp.onload();
});
