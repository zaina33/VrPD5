class House{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let roof = document.createElement("a-cone");
    roof.setAttribute("color","black");
    roof.setAttribute("position","0 7.5 0");
    roof.setAttribute("height","2");
    this.obj.append( roof );
  
    let wall = document.createElement("a-sphere");
    wall.setAttribute("position","0 6.5 0");
    wall.setAttribute("color","white");
    wall.setAttribute("radius","4");
    this.obj.append( wall );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}