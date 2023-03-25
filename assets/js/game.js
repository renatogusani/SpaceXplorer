function Game() {
  var canvas = document.getElementById('game-canvas');
  var context = canvas.getContext('2d');

  // Game variables
  var score = 0;
  var pipes = [];
  var gameOver = false;

  // Game constants
  var PIPE_GAP = 200;
  var PIPE_WIDTH = 80;
  var PIPE_SPEED = 2;
  var GRAVITY = 0.2;
  var JUMP_SPEED = 5;
  var SHIP_WIDTH = 60;
  var SHIP_HEIGHT = 40;

  // Load images
  var bgImage = new Image();
  bgImage.src = '/assets/images/bg.jpg';

  var shipImage = new Image();
  shipImage.src = '/assets/images/ship.png';

  var asteroidImage = new Image();
  asteroidImage.src = '/assets/images/asteroid.png';

  // Ship object
  var ship = {
    x: 50,
    y: canvas.height / 2,
    width: SHIP_WIDTH,
    height: SHIP_HEIGHT,
    velocity: 0
  };

  // Pipe object
  function Pipe() {
    this.x = canvas.width;
    this.y = Math.floor(Math.random() * (canvas.height - PIPE_GAP));
    this.width = PIPE_WIDTH;
    this.height = canvas.height - this.y - PIPE_GAP;
  }

  // Game functions
  function drawBackground() {
    context.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
  }

  function drawShip() {
    context.drawImage(shipImage, ship.x, ship.y, ship.width, ship.height);
  }

  function drawPipes() {
    for (var i = 0; i < pipes.length; i++) {
      var pipe = pipes[i];
      context.drawImage(asteroidImage, pipe.x, 0, pipe.width, pipe.y);
      context.drawImage(asteroidImage, pipe.x, pipe.y + PIPE_GAP, pipe.width, pipe.height);
    }
  }

  function moveShip() {
    ship.velocity += GRAVITY;
    ship.y += ship.velocity;
  }

  function jumpShip() {
    ship.velocity = -JUMP_SPEED;
  }

  function movePipes() {
    for (var i = 0; i < pipes.length; i++) {
      var pipe = pipes[i];
      pipe.x -= PIPE_SPEED;

      if (pipe.x < -PIPE_WIDTH) {
        pipes.splice(i, 1);
        i--;
      }

      if (pipe.x == canvas.width - PIPE_WIDTH - SHIP_WIDTH / 2) {
        pipes.push(new Pipe());
      }

      if (ship.x + SHIP_WIDTH > pipe.x && ship.x < pipe.x + PIPE_WIDTH && (ship.y < pipe.y || ship.y + SHIP_HEIGHT > pipe.y + PIPE_GAP)) {
        gameOver = true;
      }

      if (ship.y < 0 || ship.y + SHIP_HEIGHT > canvas.height) {
        gameOver = true;
      }

      if (pipe.x + PIPE_WIDTH == ship.x) {
        score++;
      }
    }
  }

  function drawScore() {
    context.font = '30px Arial';
    context.fillStyle = '#fff';
    context.fillText(score, 20, 40);
  }

  function drawGameOver() {
    context.font = '50px Arial';
    context.fillStyle = '#fff';
    context.fillText('Game Over', canvas.width / 2 - 150, canvas.height / 2 - 25);
    context.font = '30px Arial';
    context.fillText('Score: ' + score, canvas.width / 2 - 70, canvas.height / 2 + 25);
  }

  function gameLoop() {
    if (!gameOver) {
      context.clearRect(0, 0, canvas.width, canvas.height);

      moveShip();
      movePipes();

      drawBackground();
      drawPipes();
      drawShip();
      drawScore();
    } else {
      drawGameOver();
    }
  }

  this.start = function() {
    setInterval(gameLoop, 1000 / 60);

    canvas.addEventListener('click', function() {
      if (!gameOver) {
        jumpShip();
      } else {
        score = 0;
        pipes = [];
        gameOver = false;
        ship.y = canvas.height / 2;
      }
    });

    pipes.push(new Pipe());
  }
}

// Initialize the game
var game = new Game();

// Start the game loop
game.start();
});
</script>
