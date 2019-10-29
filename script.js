window.addEventListener("load", function() {
  var slider = document.querySelector(".slider-widget");

  if (slider) {
    new Slider(slider).initialize();
  }

  function Slider(el) {
    this.el = el;
    var _this = this;
    this.initialize = function() {
      this.el.addEventListener("click", function(e) {
        if (e.target.classList.contains("slider-widget__thumbnail-img")) {
          var index = e.target.dataset.thumb;
          _this.el.dataset.slide = index;
        }
      });

      this.el.addEventListener("touchend", function(e) {
        if (e.target.classList.contains("slider-widget__thumbnail-img")) {
          var index = e.target.dataset.thumb;
          _this.el.dataset.slide = index;
        }
      });
    };
  }
});
