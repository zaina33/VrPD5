class Rocket{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let rocket = document.createElement("a-cone");
    rocket.setAttribute("color","red");
    rocket.setAttribute("position","0 1.5 0");
    rocket.setAttribute("height","2");
    this.obj.append( rocket );
    

    let rocket2 = document.createElement("a-cylinder");
    rocket2.setAttribute("color","grey");
    rocket2.setAttribute("position","0 -.2 0");
    rocket2.setAttribute("height","1.4")
    rocket2.setAttribute("radius",".6");
    this.obj.append( rocket2 );

    let rocket3 = document.createElement("a-cone");
    rocket3.setAttribute("color","orange");
    rocket3.setAttribute("position","0 -1 0");
    rocket3.setAttribute("height","2");
    rocket3.setAttribute("scale",".5 .7 .5");
    rocket3.setAttribute("rotation","180 0 0");
    this.obj.append( rocket3 );
    

  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
