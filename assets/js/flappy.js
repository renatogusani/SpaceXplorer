<canvas id="game-canvas" width="320" height="480"></canvas>

<script src="{{ '/assets/js/game.js' | relative_url }}"></script>
<script>
  window.onload = function() {
    var game = new Game();
    game.start();
  };
</script>
