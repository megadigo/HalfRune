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
      this.icon = me.loader.getImage("hp")
     
   },
   // draw function
   draw : function (context, x, y)
   {
      context.drawImage(this.icon, this.pos.x + 0, this.pos.y + 0);
      this.font.draw(context, this.value, this.pos.x + 36, this.pos.y + 4);
   }
});
