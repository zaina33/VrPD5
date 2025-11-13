let maze = [
 "xxxxxxxxxxxxxxxxxxxxxx",
  "x-----x---------x----x",
  "x-xxx-x-xxx-xxx-x-xx-x",
  "x-x---x---x-x---x----x",
  "x-x-xxxxx-x-x-xxxxx-xx",
  "x-x-------x-x-------xx",
  "x-xxxxxxxxx-xxxxxxxxxx",
  "x-------x-----x------x",
  "xxxxxx-x-xxxxx-x-xxxxx",
  "x------x-------x-----x",
  "x-xxxxxxxxxxxxxxxxxx-x",
  "x-xxxxxxxxxxxxxxxxxxxx",
];
let scene;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene");
  for(let r = 0; r < maze.length; r++){
    let row = maze[r];
    let cols = row.split("");
    for(let c = 0; c < cols.length; c++){
      if(cols[c] == "x"){
        new Block(c,1,r)
      }
      else if(cols[c] == "T"){
        new Tree(c,1,r);
      }else if(cols[c]=="o"){
        new Rock(c,1,r)
      }
    }

  }

})