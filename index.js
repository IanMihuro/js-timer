const durationInput = document.querySelector("#duration");
const startBtn = document.querySelector("#start");
const pauseBtn = document.querySelector("#pause");
const circle = document.querySelector("circle");

const perimiter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimiter);

let duration;
const timer = new Timer(durationInput, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
    console.log("timer started");
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimiter * timeRemaining) / duration - perimiter
    );
  },
  onComplete() {
    console.log("timer completed");
  }
});
