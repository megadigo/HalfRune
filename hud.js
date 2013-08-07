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
      context.drawImage(this.icon, this.pos.x + x, this.pos.y + y);
      this.font.draw(context, this.value, this.pos.x + x + 36, this.pos.y + y + 4);
   }
});

var damageObject = me.HUD_Item.extend(
{   
   // constructor
   init: function(x, y)
   {
      // call the parent constructor
      this.parent(x, y); 
      // create a font
      this.font = new me.BitmapFont("font8", 8);
      this.icon = me.loader.getImage("damage")
     
   },
   // draw function
   draw : function (context, x, y)
   {
      context.drawImage(this.icon, this.pos.x + x, this.pos.y + y);
      this.font.draw(context, this.value, this.pos.x + x + 36, this.pos.y + y + 4);
   }
});

var armorObject = me.HUD_Item.extend(
{   
   // constructor
   init: function(x, y)
   {
      // call the parent constructor
      this.parent(x, y);
      // create a font
      this.font = new me.BitmapFont("font8", 8);
      this.icon = me.loader.getImage("armor")
     
   },
   // draw function
   draw : function (context, x, y)
   {
      context.drawImage(this.icon, this.pos.x + x, this.pos.y + y);
      this.font.draw(context, this.value, this.pos.x + x + 50, this.pos.y + y + 4);
   }
});

var borderObject = me.HUD_Item.extend(
{   
   // constructor
   init: function(x, y)
   {
      // call the parent constructor
      this.parent(x, y);
      // create a font
      this.border = me.loader.getImage("border")
     
   },
   // draw function
   draw : function (context, x, y)
   {
      context.drawImage(this.border, this.pos.x + x, this.pos.y + y);
   }
});
