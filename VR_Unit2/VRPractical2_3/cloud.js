class Cloud{
    constructor(x,y,z){
    this.obj = document.createElement("a-entity");

    let cloud1 = document.createElement("a-cone");
    cloud1.setAttribute("color","black");
    cloud1.setAttribute("position","0 7.5 0");
    cloud1.setAttribute("height","2");
    this.obj.append( cloud1 );
  
    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("position","0 6.5 0");
    cloud2.setAttribute("color","white");
    cloud2.setAttribute("radius","4");
    this.obj.append( cloud2 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
    }
}