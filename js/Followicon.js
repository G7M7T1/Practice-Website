let mouse_x = 0;
let mouse_y = 0;

let ball_x = 0;
let ball_y = 0;

const docStyles = document.documentElement.style;

document.addEventListener("mousemove", (event) => {
  mouse_x = event.clientX;
  mouse_y = event.clientY;
});

function delayMotion() {
  ball_x = mouse_x;
  ball_y = mouse_y;

  docStyles.setProperty("--mouse-x", ball_x);
  docStyles.setProperty("--mouse-y", ball_y);

  requestAnimationFrame(delayMotion);
}

delayMotion();
