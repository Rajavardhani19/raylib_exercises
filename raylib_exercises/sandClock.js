const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 1000;

const circleRadius = 100;
const upCenterX = windowWidth / 2;
const upCenterY = windowHeight / 2 - circleRadius;

const downCenterX = windowWidth / 2;
const downCentery = windowHeight / 2 + circleRadius;

const upRectangleX = upCenterX - circleRadius;
const upRectangley = upCenterY - circleRadius;

const bottomRectX = downCenterX - circleRadius;
const bootomRectY = downCentery;

const RectWidth = circleRadius * 2;
const RectHeight = circleRadius;

const sandCenterX = upCenterX;
const sandCenterY = upCenterY - 10;
// const sandCenterY = upCenterY + circleRadius / 2
const sandRadius = circleRadius - 2;

let sandRad = sandRadius;
let sandCenY = sandCenterY

const sandUpRect2X = upCenterY + (circleRadius - sandRadius);
const sandUpRect2Y = upCenterY;
const sandUpRect2Width = sandRad * 2;
const sandUpRect2Height = circleRadius - sandRad;
let surx = sandUpRect2X;
// let sury=sandUpRect2Y
let surw = sandUpRect2Width;
let surh = sandUpRect2Height;

const sandUpRect1X = sandCenterX - sandRadius;
const sandUpRect1Y = sandCenterY - sandRadius;
const sandUpRect1Width = sandRadius * 2;
const sandUpRect1Height = sandRadius - (sandCenterY - upCenterY);


const sandDownCenterX = upCenterX;
const sandDownCenterY = downCentery - 2;
const sandDownRadius = 10;
let sdr = sandDownRadius;

const lineStartX = upCenterX;
let lineStartY = sandCenterY + sandRadius;
const lineEndX = downCenterX;
const lineEndY = sandDownCenterY - 2;
// const 


function setup() {
  r.InitWindow(windowWidth, windowHeight, "sandclock");
  r.SetTargetFPS(8);
}
// function sandRectangle() {
//   r.DrawRectangle();
// }

function update() { }

function draw() {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK)
  r.DrawCircle(upCenterX, upCenterY, circleRadius, r.WHITE);
  r.DrawRectangle(upRectangleX, upRectangley, RectWidth, RectHeight, r.BLACK);
  r.DrawCircle(downCenterX, downCentery, circleRadius, r.WHITE);

  if (sandCenY <= (upCenterY + circleRadius)) {
    r.DrawCircle(sandCenterX, sandCenY, sandRad, r.BLUE);
    sandCenY += 2;
    sandRad -= 2;

    r.DrawRectangle(
      surx,
      sandUpRect2Y,
      surw,
      surh,
      r.WHITE
    );
    surx = upCenterY + (circleRadius - sandRad);
    surw = sandRad * 2;
    surh = circleRadius - sandRad;

    r.DrawRectangle(sandUpRect1X, sandUpRect1Y, sandUpRect1Width, sandUpRect1Height, r.BLACK);


    if (sdr <= circleRadius - 5) {
      r.DrawCircle(sandDownCenterX, sandDownCenterY, sdr, r.BLUE);
      sdr += 2;
    }

    if (sandCenY + 1 <= (sandCenterY + sandRadius - 10)) {
      // r.DrawLine(sandCenterX, (sandCenY + 10), sandDownCenterX, sandDownCenterY, r.BLUE)
      r.DrawRectangle(sandCenterX, (sandCenY + 10), 3, (sandDownCenterY - (sandCenY + 10)), r.BLUE)
    }

    r.DrawRectangle(bottomRectX, bootomRectY, RectWidth, RectHeight, r.BLACK);
    r.DrawRectangle(upCenterX - circleRadius - 10, upCenterY - 10, circleRadius * 2 + 20, 10, r.GRAY)
    r.DrawRectangle(downCenterX - circleRadius - 10, downCentery - 10, circleRadius * 2 + 20, 10, r.GRAY)
    r.EndDrawing();
  }
  else {
    sandCenY = sandCenterY;
    sandRad = sandRadius;
    surx = sandUpRect2X;
    surw = sandUpRect2Width;
    surh = sandUpRect2Height;
    sdr = sandDownRadius;

  }
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
r.DrawLine()