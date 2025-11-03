class Rocket {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * 0.05 + 0.02;

    this.obj = document.createElement("a-entity");

    
    let top = document.createElement("a-cone");
    top.setAttribute("color", "red");
    top.setAttribute("position", "0 1.5 0");
    top.setAttribute("height", "2");
    this.obj.append(top);

    
    let mid = document.createElement("a-cylinder");
    mid.setAttribute("color", "grey");
    mid.setAttribute("position", "0 -.2 0");
    mid.setAttribute("height", "1.4");
    mid.setAttribute("radius", ".6");
    this.obj.append(mid);

    
    let flame = document.createElement("a-cone");
    flame.setAttribute("color", "orange");
    flame.setAttribute("position", "0 -1 0");
    flame.setAttribute("height", "2");
    flame.setAttribute("scale", ".5 .7 .5");
    flame.setAttribute("rotation", "180 0 0");
    this.obj.append(flame);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }

  launch() {
    this.y += this.dy;
    this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
  }
}
