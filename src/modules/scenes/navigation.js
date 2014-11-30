(function(Crafty) {
  Crafty.defineScene('Navigation', function(sceneData) {
    var _sceneInstructions = {

        buildUI: function(sceneData) {
          

          var target = Crafty.e('NavUITarget'),

            activate = Crafty.e('NavUIActivate')
              .attr({x: 560, y: 360, w: 30, h: 30})
              .css('background-color', '#00FF00'),

            back = Crafty.e('NavUIBack')
              .attr({x: 520, y: 360, w: 30, h:30})
              .css('background-color', '#FF0000')
              .enabled(false);

          if(sceneData.parent) {
            back.scene('Navigation',sceneData.parent);
          }
        },

        buildNode: function(nodeData) {
          var node = Crafty.e('Node')
            .attr({
              w: nodeData.w,
              h: nodeData.h,
              x: nodeData.x,
              y: nodeData.y
            })
            .nodeType(nodeData.type);
          
          if(typeof nodeData.css === 'undefined') {
            node.css('background-color','#FFFF00');
          } else {
            css(nodeData.css);
          }


          return node;
        },

        buildSceneNodes: function(nodesData,container) {
          var nodeIndex = 0,
            nodeCount = nodesData.length,
            currentNodeData, nodeEntity;

          for(; nodeIndex < nodeCount; nodeIndex += 1) {
            currentNodeData = nodesData[nodeIndex];
            nodeEntity = _sceneInstructions.buildNode(currentNodeData);
            container.addNode(nodeEntity,currentNodeData);
          }
        },

        buildSceneLocation: function(sceneData) {
          var location = Crafty.e('Location')
            .location(sceneData);
          return location;
        }

      },
      
      location = _sceneInstructions.buildSceneLocation(sceneData);

    _sceneInstructions.buildSceneNodes(sceneData.nodes, location);
    _sceneInstructions.buildUI(sceneData);

  });
})(Crafty);