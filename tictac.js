window.onload = function(){
  new Game().start();
}

function Game() {
  this.boxes = document.getElementsByTagName("td");
  this.turnText = document.querySelector(".Turn");
  this.count = 1;
  this.winNum = 0;
  this.Pac = [];
  this.grimms = [];
  this.winningCombos= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
};

Game.prototype.start = function(){
  this.addPacandGrimmlistener();
  this.addResetListener();
};

 Game.prototype.addPacandGrimmlistener = function(){
  for (var i = this.boxes.length - 1; i >= 0; i--) {
    this.boxes[i].addEventListener("click", this.PacorGrimm.bind(this));
  };
};

Game.prototype.PacorGrimm = function(event){
  if (event.target.innerHTML.length === 0){
    if (this.count % 2 === 0) {
      this.Pac.push(parseInt(event.target.getAttribute("data-num")));
      event.target.setAttribute("class","Pac");
      this.turnText.innerHTML = "Pac Man's turn";
      this.count++;
      this.checkForWin(this.Pac, "Pac");
    }
    else {
      this.grimms.push(parseInt(event.target.getAttribute("data-num")));
      event.target.setAttribute("class","Grimms");
      this.turnText.innerHTML = "Ghost's turn";
      this.count++;
      this.checkForWin(this.grimms, "Grimms");
    };
  // if the Game.count is greater than or equal to 10, the game is a draw!
  if (this.count >= 10){
    this.turnText.innerHTML = "Game Over!";
    var confirm = confirm("A tie is like kissing your sister");
    if(confirm){
      this.resetBoard.bind(this);
    };
  };
};
};

Game.prototype.addResetListener = function(){
  var resetButton = document.getElementById("reset");
  resetButton.addEventListener("click", this.resetBoard.bind(this));
};

 Game.prototype.checkForWin = function(moves, name){
  for (i = 0; i < this.winningCombos.length; i++) {
    winNum = 0;
    for (var j = 0; j < this.winningCombos[i].length; j++) {
      if(moves.indexOf(this.winningCombos[i][j]) !== -1){
        winNum++;
      };
      if(winNum === 3){
        alert("Game over, " + name + " wins!");
        this.resetBoard.bind(this);
      };
    };
  };
};

 Game.prototype.resetBoard = function(){
  for (var i = this.boxes.length - 1; i >= 0; i--) {
    this.boxes[i].innerHTML="";
    this.boxes[i].setAttribute("class","clear");
  };
  this.Pac = [];
  this.grimms = [];
  winNum = 0;
  this.count = 1;
  this.turnText.innerHTML =  "Game On!";
};
