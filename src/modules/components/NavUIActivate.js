(function(Crafty) {
  Crafty.c('NavUIActivate',{

    init: function() {
      this.requires('2D, DOM, Mouse')
        .bind('Click', function(e) {
          if(this._enabled) {
            Crafty.trigger('NavActivate',e);
          }
        })
        .bind('TargetReady',function(e) {
          this.enabled(true);
        })
        .bind('TargetUnready',function(e) {
          this.enabled(false);
        })
        .attr('z', 20)
        .enabled(false);
    },

    enabled: function(enabled) {
      if(typeof enabled === undefined) {
        return this._enabled;
      }

      if(!!(enabled)) {
        this._enabled = true;
        this.alpha = 1;
      } else {
        this._enabled = false;
        this.alpha = 0.2;
      }
      return this;
    }
  });
})(Crafty)