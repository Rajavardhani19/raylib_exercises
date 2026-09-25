const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 500;
const outerRectangleX = 100;
const outerRectangleY = 100;
const outerRectangleWidth = 500;
const outerRectangleHeight = 250;
const innerWidthRatio = 0.8;
const innerHeightRatio = 0.8;

function setup() {
  r.InitWindow(windowWidth, windowHeight, "scale and center");
  r.SetTargetFPS(60);
}

function update() {}

function draw() {
  r.DrawRectangle(
    outerRectangleX,
    outerRectangleY,
    outerRectangleWidth,
    outerRectangleHeight,
    r.WHITE,
  );
  const innerRectangleWidth = calculateInnerRectangle(
    innerWidthRatio,
    outerRectangleWidth,
  );
  const innerRectangleHeight = calculateInnerRectangle(
    innerHeightRatio,
    outerRectangleHeight,
  );
  r.DrawRectangle(
    innerRectangleCoordinates(
      outerRectangleWidth,
      innerRectangleWidth,
      outerRectangleX,
    ),
    innerRectangleCoordinates(
      outerRectangleHeight,
      innerRectangleHeight,
      outerRectangleY,
    ),
    innerRectangleWidth,
    innerRectangleHeight,
    r.BLUE,
  );
}

function calculateInnerRectangle(innerRatio, outerRectangle) {
  return innerRatio * outerRectangle;
}
function innerRectangleCoordinates(
  outerRectangle,
  innerRectangle,
  outerRectCoordinate,
) {
  return outerRectangle / 2 - innerRectangle / 2 + outerRectCoordinate;
}

function loop() {
  while (!r.WindowShouldClose()) {
    r.BeginDrawing();
    r.ClearBackground(r.BLACK);
    update();
    draw();
    r.EndDrawing();
  }
}

function main() {
  setup();
  loop();
  r.CloseWindow();
}
main();
