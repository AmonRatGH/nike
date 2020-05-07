document.addEventListener('DOMContentLoaded',drawBezier,false);
function drawBezier(){
	var c = document.getElementById("Nike1");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(60, 80);
	ctx.bezierCurveTo(-140, 350, 250, 220, 550, 70);
	ctx.bezierCurveTo(20, 220, 30, 180, 60, 80);
	ctx.fill();
	ctx.stroke();
};

function drawBezier2(barva){
	var c = document.getElementById("Nike1");
	var ctx = c.getContext("2d");
	ctx.clearRect(0, 0, c.width, c.height);
	barva="#"+barva;
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.moveTo(60, 80);
	ctx.bezierCurveTo(-140, 350, 250, 220, 550, 70);
	ctx.bezierCurveTo(20, 220, 30, 180, 60, 80);
	ctx.fillStyle = barva;
	ctx.fill();
	ctx.stroke();
};