let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let box;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

    for(let i = 0; i < 100; i++){
    let x = rnd(-50,30);
    let z = rnd(-50,30);
    let rocket = new Rocket(x,1,z);

  }
    box = document.querySelector("#rocket");

    box.a = 0.1;
    box.da = .01;


  loop();
})

function loop(){
        box.a+= box.da;
        box.setAttribute("position", {x:0,y:1,z:0});

  
  window.requestAnimationFrame( loop );
}
