console.log(target);


var target = document.getElementById("myCanvas");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//making a 2
function draw2Plus2() {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.arc(80, 75, 15, 1.1 * Math.PI, 2.22 * Math.PI);
    ctx.lineTo(62, 125);
    ctx.lineTo(98, 125);
    ctx.lineWidth = 5;
    ctx.stroke();

    //making a + sign
    ctx.strokeStyle = "#00FF00";
    ctx.beginPath();
    ctx.moveTo(170, 80);
    ctx.lineTo(170, 110);
    ctx.moveTo(155, 95);
    ctx.lineTo(185, 95);
    ctx.stroke();

    //placing second 2
    ctx.strokeStyle = "#0000FF";
    ctx.beginPath();
    ctx.arc(260, 75, 15, 1.1 * Math.PI, 2.22 * Math.PI);
    ctx.lineTo(242, 125);
    ctx.lineTo(278, 125);
    ctx.lineWidth = 5;
    ctx.stroke();

    //making = sign
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.moveTo(330, 85);
    ctx.lineTo(360, 85);
    ctx.moveTo(330, 105);
    ctx.lineTo(360, 105);
    ctx.stroke();
}

//Make random lines
var count = 1;
function randomRedCurve() {
    for (i = 0; i < count; i++) {        
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = Math.random() * 5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 400, Math.random() * 200);
        ctx.bezierCurveTo(Math.random() * 450, Math.random() * 450, Math.random() * 450,
                Math.random() * 450, Math.random() * 450, Math.random() * 225);
        ctx.stroke();
        
    }
}
function randomGreenCurve() {
    for (i = 0; i < count; i++) {
        ctx.strokeStyle = "#00FF00";
        ctx.lineWidth = Math.random() * 5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 400, Math.random() * 200);
        ctx.bezierCurveTo(Math.random() * 450, Math.random() * 450, Math.random() * 450,
                Math.random() * 450, Math.random() * 450, Math.random() * 225);
        ctx.stroke();
    }
}
function randomBlueCurve() {
    for (i = 0; i < count; i++) {
        ctx.strokeStyle = "#0000FF";
        ctx.lineWidth = Math.random() * 5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 400, Math.random() * 200);
        ctx.bezierCurveTo(Math.random() * 450, Math.random() * 450, Math.random() * 450,
                Math.random() * 450, Math.random() * 450, Math.random() * 225);
        ctx.stroke();        
    }
}

function randomYellow() {
    for (i = 0; i < count; i++) {
        ctx.strokeStyle = "#FFFF00";
        ctx.lineWidth = Math.random() * 5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 400, Math.random() * 200);
        ctx.lineTo(Math.random() * 400, Math.random() * 200);
        ctx.stroke();        
    }
}

function randomBlackCurve() {
    for (i = 0; i < count; i++) {
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = Math.random() * 5;
        ctx.beginPath();
        ctx.moveTo(Math.random() * 400, Math.random() * 200);
        ctx.bezierCurveTo(Math.random() * 450, Math.random() * 450, Math.random() * 450,
                Math.random() * 450, Math.random() * 450, Math.random() * 225);
        ctx.stroke();        
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, c.width, c.height);
}


function drawRandom() {
    randomBlackCurve();
    randomBlueCurve();
    randomGreenCurve();
    randomRedCurve();
    randomYellow();
}

draw2Plus2();
drawRandom();

console.log(target);


