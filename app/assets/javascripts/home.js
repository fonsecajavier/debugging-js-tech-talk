App.Controllers.ColorChanger = {
  initialize: function() {
    this.initSelectors();
    this.bindEvents();
  },

  initSelectors: function() {
    this.$container = $(".color-changer");
    this.$changeBtn = this.$container.find(".change");
  },

  bindEvents: function() {
    this.bindChangeButton();
  },

  bindChangeButton: function() {
    var that = this;
    this.$changeBtn.on("click", function(evt){
      $.ajax({
        url: "random_color"

      })
      .done(function(data){
        that.changeContainerColor(data.color)
      })
    });
  },

  changeContainerColor: function(color) {
    this.$container.css("background", color)
  }
}

