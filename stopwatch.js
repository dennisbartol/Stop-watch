let hr = (min = sec = ms = "0" + 0),
  startTimer;


const startBtn = document.querySelector(".start"),
      stopBtn = document.querySelector(".stop"),
      resetBtn = document.querySelector(".reset");

      startBtn.addEventListener("click", start); 
      stopBtn.addEventListener("click", stop);
      resetBtn.addEventListener("click", reset);


 function start() {
        startBtn.classList.add("active"); 
        stopBtn.classList.remove("stopActive");
        startTimer = setInterval( () =>
