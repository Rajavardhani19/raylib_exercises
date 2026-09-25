const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 500;
const outerRectangleX = 500;
const outerRectangleY = 100;
const outerRectangleWidth = 200;
const outerRectangleHeight = 100;
const innerRectangleWidth = 50;
const innerRectangleHeight = 50;

function setup() {
  r.InitWindow(
    windowWidth,
    windowHeight,
    "inner rectangle in center of outer rectangle",
  );
  r.SetTargetFPS(60);
}

function update() { }

function innerRectangleCoordinates(
  outerRectangle,
  innerRectangle,
  outerRectCoordinate,
) {
  return outerRectangle / 2 - innerRectangle / 2 + outerRectCoordinate;
}

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);
  r.DrawRectangle(
    outerRectangleX,
    outerRectangleY,
    outerRectangleWidth,
    outerRectangleHeight,
    r.WHITE,
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
