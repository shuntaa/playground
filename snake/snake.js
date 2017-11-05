
    var canvas;
    var currentX, currentY;
    var xDirection = 0, yDirection = 0;
    var score = 0;

    var view = {
      scoreElement: null,
      gameOverElement: null,
      playAgainButton: null,
      init: function(doc) {
        this.scoreElement = doc.getElementById("score");
        this.gameOverElement = doc.getElementById("game-over");
        this.playAgainButton = doc.getElementById("play-again");
        this.scoreElement.innerHTML = 0;
        this.gameOverElement.classList.add("hide");
        this.playAgainButton.classList.add("hide");
      },
      showGameOver: function() {
        this.playAgainButton.classList.remove("hide");
        this.gameOverElement.classList.remove("hide");
      }
    };

    var drawArea = {
      canvas: null,
      context: null,
      init: function(doc) {
        this.canvas = doc.getElementById("my-canvas");
        this.context = this.canvas.getContext("2d");
        this.context.strokeStyle= "blue";
      },
      reset: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();
      }


    };


    function main() {
      drawArea.init(document);
      initGame();
    }


    function initGame() {
      drawArea.reset();
      score = 0, xDirection = 0, yDirection = 0;
      currentX = drawArea.canvas.width/2, currentY =drawArea.canvas.height/2 ;

      /*setTimeout(function() {
        context.fillStyle = "red";
        context.fillRect(150,40,10,10);
      },5000);*/
      view.init(document);
    }


    function isInCanvas() {
      var xInBounds =  (currentX >= 0) && (currentX <= drawArea.canvas.width);
      var yInBounds =  (currentY >= 0) && (currentY <= drawArea.canvas.height);
      return xInBounds && yInBounds;
    }


    function draw() {
      var speed;
      speed = 2;

      currentX += xDirection  * speed;
      currentY += yDirection * speed;

      if(drawArea.context.isPointInStroke(currentX,currentY) || !isInCanvas()){
        view.showGameOver();
      }
      else{
        drawArea.context.lineTo(currentX,currentY);
        score++;
        view.scoreElement.innerHTML = score;
        drawArea.context.stroke();
        window.requestAnimationFrame(draw);
      }
    }

    function handleKey(e) {
      console.log(e.keyCode);
      switch (e.keyCode) {
        case 37:
          xDirection = -1, yDirection = 0
          break;
        case 38:
          xDirection = 0, yDirection = -1
          break;
        case 39:
          xDirection = 1, yDirection =0
          break;
        case 40:
          xDirection = 0, yDirection = 1
          break;
      }
     if((score === 0)&& (37 <= e.keyCode && e.keyCode <= 40)){
       window.requestAnimationFrame(draw);
     }
    }


    document.onkeydown = handleKey;
    window.onload = main;
