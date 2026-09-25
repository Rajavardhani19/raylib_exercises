const r = require("raylib");
const g = require("./geometry.js")

const windowWidth = 1000;
const windowHeight = 500;
const rectWidth = 240;
const rectHeight = 200;
function setup() {
  r.InitWindow(windowWidth, windowHeight, "center of rectangle");
  r.SetTargetFPS(20);
}
function update() { }
function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawRectangle(
    g.RectangleCoordinates(windowWidth, rectWidth),
    g.RectangleCoordinates(windowHeight, rectHeight),
    rectWidth,
    rectHeight,
    r.BLACK,
  );
  r.EndDrawing();
}

function loop() {
  while (!r.WindowShouldClose()) {
    update();
    draw();
  }
}
function main() {
  setup();
  loop();
  r.CloseWindow();
}

main();
