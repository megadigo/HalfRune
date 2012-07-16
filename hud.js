/**
 * @author RCordeiro
 */
// create a "score object" that will use a Bitmap font
// to display the score value

var hpObject = me.HUD_Item.extend(
{   
   // constructor
   init: function(x, y)
   {
      // call the parent constructor
      this.parent(x, y);
      // create a font
      this.font = new me.BitmapFont("font8", 8);
   },
   // draw function
   draw : function (context, x, y)
   {
      this.font.draw (context, this.value, this.pos.x + x, this.pos.y + y);
   }
});
