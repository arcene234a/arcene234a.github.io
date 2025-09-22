$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 25, "white");
createPlatform(450, 650, 50, 200, "white");
createPlatform(600, 550, 50, 25, "white");
createPlatform(850, 550, 50, 25, "white");
createPlatform(200, 300, 50, 25, "white");
createPlatform(1350, 100, 50, 25, "white");
createPlatform(1300, 100, 50, 25, "white");
createPlatform(1250, 100, 50, 25, "white");
createPlatform(1050, 450, 50, 25, "white");
createPlatform(1200, 500, 50, 25, "white");
createPlatform(1250, 500, 50, 25, "white");
createPlatform(1100, 300, 50, 25, "white");
createPlatform(1150, 300, 50, 25, "white");
createPlatform(1150, 500, 50, 25, "white");
createPlatform(900, 200, 50, 25, "white");
createPlatform(950, 200, 50, 25, "white");
createPlatform(1000, 200, 50, 25, "white");
createPlatform(1050, 200, 50, 25, "white");
createPlatform(775, 250, 50, 25, "white");
createPlatform(520, 265, 50, 25, "white");
createPlatform(200, 650, 50, 25, "white");
createPlatform(420, 400, 200, 25, "white");
createPlatform(450, 265, 50, 25, "white");
createPlatform(450, 125, 50, 25, "white");
createPlatform(100, 175, 50, 25, "white");
createPlatform(350, 175, 50, 15, "white");
createPlatform(675, 175, 50, 15, "white");
createPlatform(525, 115, 75, 15, "white");
createPlatform(0, 100, 50, 50, "lime"); // bright green for a finished platform
    // TODO 3 - Create Collectables
createCollectable("steve", 1350, 50);
createCollectable("diamond", 450, 10, 0.5, 0.7);
createCollectable("kennedi", 525, 75, 0.5, 0.7);


    
    // TODO 4 - Create Cannons
createCannon("top", 200, 5000);
createCannon("right", 300, 3000);
createCannon("bottom", 250, 1500);
createCannon("bottom", 650, 1500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
