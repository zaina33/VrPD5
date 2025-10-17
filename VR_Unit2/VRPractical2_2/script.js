let scene;
let box;
let sphere;
let cone;

window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    box = document.querySelector("#car");
    sphere = document.querySelector("#pokemonball");
    cone = document.querySelector("#rocket");
    box.a = 0.01;
    box.da = .1;
    sphere.a =0.5;
    sphere.da = .5;
    loop();
  })

    function loop(){
        box.a+= box.da;
        sphere.a+= sphere.da;
        box.setAttribute("position",{x:0,y:0,z:box.a});
        sphere.setAttribute("rotation",{x:sphere.a,y:0,z:0});
        cone.setAttribute("position", {x:0,y:sphere.a,z:0});
        window.requestAnimationFrame(loop);
    }


    

    
    
