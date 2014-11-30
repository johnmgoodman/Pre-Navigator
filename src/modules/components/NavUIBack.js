(function(Crafty) {
  Crafty.c('NavUIBack', {

    __callback_Click: function(e) {
      if(!!(this._enabled) && typeof this._sceneName !== 'undefined' && typeof this._sceneData !== 'undefined') {
        Crafty.enterScene(this._sceneName,this._sceneData);
      }
    },

    init: function() {
      this.requires('2D, DOM, Mouse')
        .bind('Click', this.__callback_Click)
        .attr('z', 20);
    },

    scene: function(sceneName,sceneData) {
      this._sceneName = sceneName;
      this._sceneData = sceneData;
      this.enabled(true);
      return this
    },

    enabled: function(enable) {
      if(typeof enable === 'undefined') {
        return this._enabled;
      }

      if(!!(enable)) {
        this._enabled = true;
        this.alpha = 1;
      } else {
        this._enabled = false;
        this.alpha = 0.2;
      }

      return this;
    }

  })
})(Crafty);