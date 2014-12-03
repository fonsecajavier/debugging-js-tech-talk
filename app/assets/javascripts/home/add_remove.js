App.Controllers.AddRemove = {
  addRemoveElemTmpl: null,

  initialize: function() {
    this.initSelectors();
    this.bindEvents();
  },

  initSelectors: function() {
    this.$container = $(".add-remove");
    this.$list = this.$container.find("ul");
    this.$btnAdd = this.$container.find(".add");
    this.$btnAddRandom = this.$container.find(".add-random");
    this.initTemplates();
  },

  initTemplates: function() {
    this.addRemoveElemTmpl = $("#add-remove-element").html();
    Mustache.parse(this.addRemoveElemTmpl);
  },

  bindEvents: function() {
    this.bindAdd();
    this.bindAddRandom();
  },

  bindAdd: function() {
    var that = this;
    this.$btnAdd.on("click", function(evt){
      var content = window.prompt("Enter some text");
      if(content != null){
        that.appendListElement(content);
      }
    })
  },

  bindAddRandom: function() {
    var that = this;
    this.$btnAddRandom.on("click", function(evt){
      var rnd = parseInt(Math.random() * 100);
      that.appendListElement("Random number " + rnd);
    });
  },

  appendListElement: function(content) {
    var rendered = Mustache.render(this.addRemoveElemTmpl, {content: content})
    var $elem = this.$list.append(rendered);
    this.bindRemove($elem);
  },

  bindRemove: function($elem) {
    var that = this;
    $elem.find(".remove").on("click", function(evt){
      $(this).parents("li").fadeOut(150, function(){ $(this).remove() });
    });
  }
}

