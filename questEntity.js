/**
 * @author rcordeiro
 */
var questEntity =  Object.extend({
  init: function() {
		
      this.counterupdate=0;
      this.counterdraw=0;
  },
  
  update: function() {
      this.counterupdate +=1;
      //console.log("update " + this.counterupdate)
      return true
  },
  
  draw : function(context){
      this.counterdraw +=1;
      console.log("draw " + this.counterdraw)
      this.parent(context);
  }  
});


