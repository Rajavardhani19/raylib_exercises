const r = require("raylib")
const WIDTH = 1000;
const HEIGHT = 1000;

const c1X = 300;
const c1Y = 500;
const c1Radius = 100;


const c2X = 600;
const c2y = 500;
const c2Radius = 100;


function setup() {
    r.InitWindow(WIDTH, HEIGHT, "intersecting circle")
    r.SetTargetFPS(60);
}

function update() {
}

function changeColour(distance, c1, c2) {

    // if (c1 >= d && c2 < d) {
    if (distance <= (c1 + c2)) {
        r.DrawCircle(c1X, c1Y, c1Radius, r.RED)
        r.DrawCircle(c2X, c2y, c2Radius, r.RED)
    }
    else {
        r.DrawCircle(c1X, c1Y, c1Radius, r.BLACK)
        r.DrawCircle(c2X, c2y, c2Radius, r.BLACK)
    }


}

function distance() {
    return (((c2X - c1X) ** 2 + (c2y - c1Y) ** 2) * 0.5)

}


// function addRadius() {

// }


function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    changeColour(distance(), c1Radius, c2Radius);
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
}
main();