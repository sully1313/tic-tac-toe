$(document).ready(function(){
    var turnCount=0;

      $('#board').find('td').on('click', function(){
            if (turnCount % 2 === 0){
              $(this).text('X');
              checkForWin('X');
            } else {
              $(this).text('O');
              checkForWin('O');
            }
          turnCount++;
      });


    function checkForWin(player){
//top row
        if ($('#board').find('#1').text() !== ''){
            if ($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if ($('#board').find('#1').text() == $('#3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
//left column
            if ($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if ($('#board').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
          }
        }
