/**
 * @author rcordeiro
 */
var quest =  Object.extend({
  init: function() {
      this.counter=0;
  },
  update: function() {
      this.counter +=1;
      console.log(this.counter)
  }  
});
