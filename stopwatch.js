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
        startTimer = setInterval( () => { 
          ms++; 
          ms = ms < 10 ? "0" + ms : ms;
          if(ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "0" + 0;
          }
