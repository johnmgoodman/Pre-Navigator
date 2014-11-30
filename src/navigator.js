(function(Crafty) {
  var navData1 = require('./game.json');

  require('./modules/components/Node');
  require('./modules/components/Location');

  require('./modules/components/NavUITarget');
  require('./modules/components/NavUIActivate');
  require('./modules/components/NavUIBack');

  require('./modules/scenes/navigation');

  Crafty.init(600,400,window.document.getElementById('gamescreen'));
  Crafty.background('#000000');
  Crafty.load({'images':["./styles/images/bg_stars_1.png","./styles/images/red-dwarf_1.png","./styles/images/planet_solid_1.png"]}, function() {
    Crafty.enterScene('Navigation',navData1);
  });

})(Crafty);