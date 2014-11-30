(function(Crafty) {
  Crafty.c('NavUITarget', {

    __callback_NavActivate: function(e) {
      if(this._ready) {
        // Scene 'Navigation' only applies to Location node activation and subject to change
        Crafty.enterScene('Navigation', this._targetData.location); 
      }
    },

    __callback_NodeSelected: function(nodeData) {
      var circle = (function(nodeData){
          var nPos = {x: nodeData.x, y: nodeData.y},
            nDim = {w: nodeData.w, h: nodeData.h},
            larger = nDim.w > nDim.h ? nDim.w : nDim.h,
            radius = larger * (3/4);

          return {
            x: nPos.x - Math.round(radius/3),
            y: nPos.y - Math.round(radius/3),
            r: Math.round(radius)
          };
        })(nodeData);
      
        this.attr({
          x: circle.x,
          y: circle.y,
          w: circle.r * 2,
          h: circle.r * 2
        })
        .css({
          borderRadius: circle.r
        });

        this._targetData = nodeData;
        this.ready(true);
    },

    init: function() {
      this.requires('2D, DOM')
        .attr('z',5)
        .css({
          backgroundColor: '#00BB88'
        })
        .bind('NodeSelected', this.__callback_NodeSelected)
        .bind('NavActivate', this.__callback_NavActivate);

      this.alpha = 0.5;
      this.ready(false);
    },

    ready: function(ready) {
      if(typeof ready === 'undefined') {
        return this._ready;
      }
      
      if(!!ready) {
        this._ready = true;
        this.visible = true;
        Crafty.trigger('TargetReady',this._targetData);
      } else {
        this._ready = false;
        this.visible = false;
        Crafty.trigger('TargetUnready',this._targetData);
      }

    }
  })
})(Crafty)