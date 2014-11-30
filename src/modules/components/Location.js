(function(Crafty) {

  var allLocations = [];

  Crafty.c('Location', {
    init: function() {
      this._locationId = allLocations.push(this) - 1;
      this._nodeData = {};

      this.bind('LocationNodeClick', function(node) {
          nodeData = this._nodeData[node.nodeId()];
          if(typeof nodeData !== 'undefined') {
            if(nodeData.location) {
              nodeData.location.parent = this._selfData;
              Crafty.trigger('NodeSelected', nodeData);
            }
          }
        });
    },

    location: function(selfData) {
      if(typeof selfData !== 'undefined') {
        this._selfData = selfData;
      }
      return this;
    },

    addNode: function(nodeEntity, nodeData) {
      this._nodeData[nodeEntity.nodeId()] = nodeData;
      return this;
    }
  });
})(Crafty);