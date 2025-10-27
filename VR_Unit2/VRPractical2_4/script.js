let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

    for(let i = 0; i < 100; i++){
    let x = rnd(-50,30);
    let z = rnd(-50,30);
    let rocket = new Rocket(x,1,z);
  }

  loop();
})

function loop(){

  
  window.requestAnimationFrame( loop );
}
