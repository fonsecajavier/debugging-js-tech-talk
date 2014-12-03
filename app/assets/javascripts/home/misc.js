App.Controllers.Misc = {

  initialize: function() {
    this.initSelectors();
    this.bindEvents();
  },

  initSelectors: function() {
    this.$container = $(".misc");
    this.$btnRaiseException = this.$container.find(".raise-exception");
    this.$btnLoadDynamicJS = this.$container.find(".load-dynamic-js");
  },

  bindEvents: function() {
    this.bindRaiseException();
    this.bindLoadDynamicJS();
  },

  bindRaiseException: function() {
    var that = this;
    this.$btnRaiseException.on("click", function(evt){
      console.log("About to throw exception");
      that.throwException();
    });
  },

  bindLoadDynamicJS: function() {
    var that = this;
    this.$btnLoadDynamicJS.on("click", function(evt){
      $.ajax({
        url: "dynamic_script.js"
      })
    });
  },

  throwException: function() {
    throw("User generated exception");
  }

}

