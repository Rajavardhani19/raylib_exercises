const r = require("raylib");
const g = require("geometry.js")
const screenWidth = 400;
const screenHeight = 400;
const FPS = 60;

let rectWidth = 200;
let rectHeight = 200;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Rectangle");
    r.SetTargetFPS(FPS);
}

function update() {
    rectWidth++;
    rectHeight--;
}

function draw() {
    r.DrawRectangle(g.calcOffset(screenWidth, rectWidth), g.calcOffset(screenHeight, rectHeight), rectWidth, rectHeight)
    // draw the rectangle
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};

