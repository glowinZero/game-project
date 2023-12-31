window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const restartWin = document.getElementById("restart-win");
  const audio = document.getElementById("shoot-sound");
  const backgroundAudio = document.getElementById("background-music");
  let game;

  startButton.addEventListener("click", function () {
      startGame();
  });

  function startGame() {
      console.log("start Game");
      game = new Game();
      game.start();
      backgroundAudio.volume = 0.2;
      backgroundAudio.play();
      requestAnimationFrame(gameLoop); 
  }

  function gameLoop() {
      if (game) {
          game.update();
      }
      if (game && game.player) {
          game.player.move(); 
      }
      requestAnimationFrame(gameLoop); 
  }

  const shot = document.addEventListener("keydown", function (event) {
      if (event.key === " " || event.key === "Spacebar") {
          game.updateCollision();
          audio.volume = 0.2;
          audio.play();
      }
  });

  function handleKeydown(event) {
      const key = event.key;
      const possibleKeystrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
      if (possibleKeystrokes.includes(key)) {
          event.preventDefault();
          if (game && game.player) {
              switch (key) {
                  case "ArrowLeft":
                      game.player.directionX = -5;
                      break;
                  case "ArrowRight":
                      game.player.directionX = 5;
                      break;
                  case "ArrowUp":
                      game.player.directionY = -5;
                      break;
                  case "ArrowDown":
                      game.player.directionY = 5;
                      break;
              }
          }
      }
  }

  window.addEventListener("keydown", handleKeydown);

  function handleKeyup(event) {
      const key = event.key;
      const possibleKeystrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

      if (possibleKeystrokes.includes(key)) {
          event.preventDefault();
          if (game && game.player) {
              switch (key) {
                  case "ArrowLeft":
                      game.player.directionX = 0;
                  case "ArrowRight":
                      game.player.directionX = 0;
                      break;
                  case "ArrowUp":
                      game.player.directionY = 0;
                  case "ArrowDown":
                      game.player.directionY = 0;
                      break;
              }
          }
      }
  }

  window.addEventListener("keyup", handleKeyup);

  restartButton.addEventListener("click", function () {
      restartGame();
  });
  restartWin.addEventListener("click", function () {
    restartGame();
});

  function restartGame() {
      location.reload();
  }
};


