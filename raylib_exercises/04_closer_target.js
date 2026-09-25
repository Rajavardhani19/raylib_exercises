const r = require("raylib");
const windowWidth = 1000;
const windowWHeight = 1000;
const sourceRadius = 50;
const sourceCenterX = 100;
const sourceCentery = 900;
const destination1Radius = 50;
const destination1CenterX = 400;
const destination1Centery = 200;
const destination2Radius = 50;
const destination2CenterX = 400;
const destination2Centery = 600;

function setup() {
  r.InitWindow(windowWidth, windowWHeight, "closer target");
  r.SetTargetFPS(60);
}

function update() {}
// function distance(x1, y1, x2, y2) {
//   return (x1 - x2) ** 2 + (y1 - y2) ** 2 * 0.5;
// }

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.WHITE);
  r.DrawCircle(sourceCenterX, sourceCentery, sourceRadius, r.RED);
  r.DrawCircle(
    destination1CenterX,
    destination1Centery,
    destination1Radius,
    r.BLUE,
  );
  r.DrawCircle(
    destination2CenterX,
    destination2Centery,
    destination2Radius,
    r.BLUE,
  );

  const difference1 = subtration(
    sourceCenterX,
    destination1CenterX,
    sourceCentery,
    destination1Centery,
  );
  const difference2 = subtration(
    sourceCenterX,
    destination2CenterX,
    sourceCentery,
    destination2Centery,
  );
  if (difference1 > difference2) {
    r.DrawLine(
      sourceCenterX,
      sourceCentery,
      destination2CenterX,
      destination2Centery,
      r.BLACK,
    );
  } else if (difference1 < difference2) {
    r.DrawLine(
      sourceCenterX,
      sourceCentery,
      destination1CenterX,
      destination1Centery,
      r.BLACK,
    );
  } else {
    const value1 =
      sourceCenterX < destination1CenterX
        ? destination1CenterX - sourceCenterX
        : sourceCenterX - destination1CenterX;
    const value2 =
      sourceCenterX < destination2CenterX
        ? destination2CenterX - sourceCenterX
        : sourceCenterX - destination2CenterX;
    value1 < value2
      ? r.DrawLine(
          sourceCenterX,
          sourceCentery,
          destination1CenterX,
          destination1Centery,
          r.BLACK,
        )
      : r.DrawLine(
          sourceCenterX,
          sourceCentery,
          destination2CenterX,
          destination2Centery,
          r.BLACK,
        );
  }
  //   const des1Distance = distance(
  //     sourceCenterX,
  //     sourceCentery,
  //     destination1CenterX,
  //     destination1Centery,
  //   );
  //   const des2Distance = distance(
  //     sourceCenterX,
  //     sourceCentery,
  //     destination2CenterX,
  //     destination2Centery,
  //   );
  //   if (des1Distance < des2Distance) {
  //     r.DrawLine(
  //       sourceCenterX,
  //       sourceCentery,
  //       destination1CenterX,
  //       destination1Centery,
  //       r.BLACK,
  //     );
  //   } else {
  //     r.DrawLine(
  //       sourceCenterX,
  //       sourceCentery,
  //       destination2CenterX,
  //       destination2Centery,
  //       r.BLACK,
  //     );
  r.EndDrawing();
}

function subtration(sourcex, destx, sourcey, desty) {
  const value1 = sourcex < destx ? destx - sourcex : sourcex - destx;
  const value2 = sourcey < desty ? desty - sourcey : sourcey - desty;
  return value1 + value2;
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
