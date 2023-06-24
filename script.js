function startCountdown(duration) {
    var timerDisplay = document.getElementById("timer");
    var endTime = Date.now() + duration * 60000; // Convert minutes to milliseconds
    var timer = setInterval(updateCountdown, 1000); // Update every second

    function updateCountdown() {
      var remainingTime = Math.max(0, Math.floor((endTime - Date.now()) / 1000)); // Remaining time in seconds
      var minutes = Math.floor(remainingTime / 60);
      var seconds = remainingTime % 60;
      timerDisplay.innerText = minutes + "m " + seconds + "s";

      if (remainingTime <= 0) {
        clearInterval(timer);
        timerDisplay.innerText = "Take a break!";
        playNotificationSound();
      }
    }
  }

  function playNotificationSound() {
    var audio = new Audio("Takeoff.mp3"); // Replace with the path to your notification sound file
    audio.play();
  }

  document.getElementById("btn15").addEventListener("click", function() {
    startCountdown(0.1);
  });

  document.getElementById("btn30").addEventListener("click", function() {
    startCountdown(30);
  });

  document.getElementById("btn60").addEventListener("click", function() {
    startCountdown(60);
  });