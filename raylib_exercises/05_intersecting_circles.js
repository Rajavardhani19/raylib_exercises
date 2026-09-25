const r = require("raylib");
const windowWidth = 1000;
const windowHeight = 1000;
const firstCenterX = 200;
const firstCenterY = 300;
const firstRadius = 100;
const secondCenterX = 400;
const secondCenterY = 200;
const secondRadius = 100;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "circles intersection");
    r.SetTargetFPS(60);
}

function update() { }
function colourChange(firstCircum, secondcircum) {
    const difference = secondcircum - firstCircum;
    if (difference >= 0) {
        return r.RED
        // r.DrawCircle(firstCenterX, firstCenterY, firstRadius, r.RED);
        // r.DrawCircle(secondCenterX, secondCenterY, secondRadius, r.RED);
    }
    else {
        return r.BLACK
    }
}
function checkTouch(firstCir, secondCir) {
    if (firstCir < secondCir) {
        const firstCircum = firstCir + firstRadius;
        const secondCircum = secondCir - secondRadius;
        return colourChange(firstCircum, secondCircum);
    }
    else if (firstCir > secondCir) {
        const firstCircum = firstCir - firstRadius;
        const secondCircum = secondCir + secondRadius;
        return colourChange(firstCircum, secondCircum);
    }
    else {
        return checkTouch(firstCenterY, secondCenterY);
    }
}
function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    let change = checkTouch(firstCenterX, secondCenterX)
    r.DrawCircle(firstCenterX, firstCenterY, firstRadius, change);
    r.DrawCircle(secondCenterX, secondCenterY, secondRadius, change);
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

