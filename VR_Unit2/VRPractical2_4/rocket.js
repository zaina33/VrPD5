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
    rocket2.setAttribute("position","0 0 0");
    rocket2.setAttribute("length","4");
    rocket2.setAttribute("width","2");
    this.obj.append( rocket2 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
