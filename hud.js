/**
 * @author RCordeiro
 */
var hudBase = me.HUD_Item.extend({
    init: function(x, y) {
        this.parent(x, y);
        this.image = me.loader.getImage("hud");
    },
    draw: function(context, x, y) {
        context.drawImage(this.image, 0, 0);
    }
});


// create a "score object" that will use a Bitmap font
// to display the score value
ScoreObject = me.HUD_Item.extend(
{   
   // constructor
   init: function(x, y)
   {
      // call the parent constructor
      this.parent(x, y);
      // create a font
      this.font = new me.BitmapFont("font16px", 16);
   },
   // draw function
   draw : function (context, x, y)
   {
      this.font.draw (context, this.value, this.pos.x +x, this.pos.y +y);
   }
});
