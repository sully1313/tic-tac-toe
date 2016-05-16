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
        if($('#board').find('#1').text() !== ''){
            if($('#board').find('#1').text() == $('#board').find('#2').text()) {
                if($('#board').find('#1').text() == $('#3').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
//left column
            if($('#board').find('#1').text() == $('#board').find('#4').text()) {
                if($('#board').find('#1').text() == $('#7').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
//left diagonal
          if($('#board').find('#1').text() == $('#board').find('#5').text()){
            if($('#board').find('#1').text() == $('#9').text()){
              alert('Game over! '+player+' is the winner!');
              $('#newGame').removeClass('invisible');
            }
          }
        }
//middle column
          if($('#board').find('#2').text() !== ''){
            if($('#board').find('#2').text() == $('#board').find('#5').text()){
              if($('#board').find('#2').text() == $('#8').text()){
                alert('Game over! '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
              }
            }
          }
//right column
          if($('#board').find('#3').text() !== ''){
            if($('#board').find('#3').text() == $('#board').find('#6').text()){
              if($('#board').find('#3').text() == $('#9').text()){
                alert('Game Over '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
              }
            }
//right diagonal
            if($('#board').find('#3').text() == $('#board').find('#5').text()){
              if($('#board').find('#3').text() == $('#7').text()){
                alert('Game Over '+player+' is the winner!');
                $('#newGame').removeClass('invisible');
              }
            }
          }
//middle row
          if($('#board').find('#4').text() !== ''){
            if($('#board').find('#4').text() == $('#board').find('#5').text()){
              if($('#board').find('#4').text() == $('#6').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
//bottom row
        if ($('#board').find('#7').text() !== ''){
            if ($('#board').find('#7').text() == $('#board').find('#8').text()) {
                if ($('#board').find('#7').text() == $('#9').text()) {
                    alert('Game over! '+player+' is the winner!');
                    $('#newGame').removeClass('invisible');
                }
            }
        }
    }
    $('#newGame').on('click',function(){
        $('.square').text('');
    });
});
