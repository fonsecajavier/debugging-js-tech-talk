App.Controllers.Misc = {

  initialize: function() {
    this.initSelectors();
    this.bindEvents();
  },

  initSelectors: function() {
    this.$container = $(".misc");
    this.$btnRaiseException = this.$container.find(".raise-exception");
  },

  bindEvents: function() {
    this.bindRaiseException();
  },

  bindRaiseException: function() {
    var that = this;
    this.$btnRaiseException.on("click", function(evt){
      console.log("About to throw exception");
      that.throwException();
    });
  },

  throwException: function() {
    throw("User generated exception");
  }

}

