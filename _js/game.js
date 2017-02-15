//Game module
var BubbleShoot = window.BubbleShoot || {};
//if window.BubbleShoot doesn't exist, it will be
//created as an empty object
//Immediately Invoked Function Expression
BubbleShoot.Game = (function($){
  //we can access the Game class from the global
  //scope as BubbleShot.Game
  var Game = function(){};
  return Game;
})(jQuery);
