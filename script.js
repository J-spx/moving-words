window.onload = function () {
    canvas = document.getElementById("creativeCoding");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx = canvas.getContext("2d");
    setInterval(drawBoxxy, 10);
}

let x = 0;
let y = 0;
let incrementor = 2;

function drawBoxxy() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Adding Strings (text, x, y)

    ctx.font = "60px Times New Roman";
    ctx.fillStyle = "blue";
    ctx.fillText("Impressive", 200, 350);
    ctx.fillStyle = "orange"
    ctx.fillText("Smooth", 50, y);


    //  Passing a variable with text
    let input = "Extravagant"
    ctx.fillText(input, x, 400);


    // Adjusting speed and position
    while (x + incrementor > canvas.width || x + incrementor < 0) {
        incrementor = -incrementor;
    }
    while (y + incrementor > canvas.height || y + incrementor < 0) {
        incrementor = -incrementor;
    }
    x += incrementor;
    y += incrementor;
}
