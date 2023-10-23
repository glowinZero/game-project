window.onload = function (){
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    let game;

    startButton.addEventListener("click", function(){
        startGame();
    });

    function startGame(){
        console.log("start Game");
        game = new Game();
        game.start();
    }

    setInterval(()=>{
        game.update()
    }, 500);

    const shot = document.addEventListener("keydown", function(event){
        if(event.key === " " || event.key === "Spacebar"){
            game.updateCollision();
        }
    })

    restartButton.addEventListener("click", function(){
        restartGame()
    })
    
    function restartGame() {
        location.reload();
      }
}
