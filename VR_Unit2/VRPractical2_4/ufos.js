class UFO {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.dy = Math.random() * 0.05 + 0.01;

    this.obj = document.createElement("a-entity");

    let body = document.createElement("a-cylinder");
    body.setAttribute("color", "silver");
    body.setAttribute("height", "0.5");
    body.setAttribute("radius", "1.5");
    body.setAttribute("position", "0 0 0");
    this.obj.append(body);

 
    let dome = document.createElement("a-sphere");
    dome.setAttribute("color", "lightgreen");
    dome.setAttribute("radius", "0.7");
    dome.setAttribute("position", "0 0.5 0");
    this.obj.append(dome);

    this.obj.setAttribute("position", { x: x, y: y, z: z });
    scene.append(this.obj);
  }


  invade() {
    if (this.y > 0) { 
      this.y -= this.dy;
      if (this.y < 0) this.y = 0;
      this.obj.setAttribute("position", { x: this.x, y: this.y, z: this.z });
    }
  }
}
