(function(Crafty) {

  var allNodes = [];

  Crafty.c('Node', {
    init: function() {
      this.requires('2D, DOM, Mouse')
        .bind('Click', function() {
          Crafty.trigger(this._nodeType+'Click',this);
        })
        .attr('z',10);

      this._nodeId = allNodes.push(this) - 1;
    },

    nodeType: function(nodeType) {
      if(typeof nodeType === 'undefined') {
        return this._nodeType;
      }

      this._nodeType = nodeType;
      return this;
    },

    nodeId: function() {
      return this._nodeId;
    }
  });
})(Crafty);