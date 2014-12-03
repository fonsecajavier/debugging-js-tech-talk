App.Controllers.ColorChanger = {
  initialize: function() {
    this.initSelectors();
    this.bindEvents();
  },

  initSelectors: function() {
    this.$container = $(".color-changer");
    this.$textContainer = this.$container.find(".text-container");
    this.$btnChange = this.$container.find(".change");
    this.$btnClear = this.$container.find(".clear");
  },

  bindEvents: function() {
    this.bindChangeButton();
    this.bindClearButton();
  },

  bindChangeButton: function() {
    var that = this;
    this.$btnChange.on("click", function(evt){
      var inputData = {
        some_random_input: Math.random() * 100
      };

      $.ajax({
        url: "random_color",
        data: inputData
      })
      .done(function(data){
        that.changeContainerColor(data.color);
        that.appendRandomResult(inputData.some_random_input, data.some_random_output)
      })
    });
  },

  bindClearButton: function(){
    var that = this;
    this.$btnClear.on("click", function(evt){
      that.$textContainer.html("");
    });
  },

  changeContainerColor: function(color) {
    this.$container.css("background", color)
  },

  appendRandomResult: function(input, output) {
    this.$textContainer.append("<p>Sent some random " + input + ", got " + output + "</p>");
  }
}

