let rnd = (l, u) => Math.floor(Math.random() * (u - l) + l);
let scene;
let rockets = [];
let ufos = [];

window.addEventListener("DOMContentLoaded", function () {
  scene = document.querySelector("a-scene");

  
  for (let i = 0; i < 100; i++) {
    let x = rnd(-25, 25);
    let z = rnd(-25, 25);
    let y = 0; 
    let rocket = new Rocket(x, y, z);
    rockets.push(rocket);
  }

  for (let i = 0; i < 20; i++) {
  let x = rnd(-25, 25);
  let z = rnd(-25, 25);
  let y = rnd(15, 30);
  let ufo = new UFO(x, y, z);
  ufos.push(ufo);
}

  loop();
});

function loop() {
  for (let r of rockets) {
    r.launch();
  }
  for (let u of ufos) {
    u.invade();
  }

  window.requestAnimationFrame(loop);
}
