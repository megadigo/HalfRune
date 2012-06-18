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
