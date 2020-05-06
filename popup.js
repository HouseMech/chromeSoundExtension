var audio = new Audio('soldierlaugh.wav');
document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    audio.play();
    });
  }, false);
