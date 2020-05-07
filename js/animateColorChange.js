function ACC(){
	let x=document.getElementById("ColorButton1").value;
	document.getElementById("pathsvg").style.fill="#"+x;
}
function ACC1(){
	let x=document.getElementById("ColorButton1").value;
	var c = document.getElementById("Nike1");
	var ctx = c.getContext("2d");
	
	let newRgb=document.getElementById("ColorButton1").value;
	newRgb=newRgb.toLowerCase();
	let element=document.querySelector('#pathsvg');
	let oldRgb=ctx.fillStyle;
	oldRgb=oldRgb.substring(1,7);
	
	console.log(ctx.fillStyle);
	let endColor={
		red: parseInt(newRgb.substring(0,2),16),
		green: parseInt(newRgb.substring(2,4),16),
		blue: parseInt(newRgb.substring(4,6),16)
	}
	console.log(endColor);
	let startColor={
		red: parseInt(oldRgb.substring(0,2),16),
		green: parseInt(oldRgb.substring(2,4),16),
		blue: parseInt(oldRgb.substring(4,6),16)
	}
	console.log(startColor.red);
	console.log(startColor.green);
	console.log(startColor.blue);
	
	console.log(endColor.red);
	console.log(endColor.green);
	console.log(endColor.blue);
	
	var diffRed = endColor.red - startColor.red;
	var diffGreen = endColor.green - startColor.green;
	var diffBlue = endColor.blue - startColor.blue;
	
	let newValue;
	for(let percentFade=1;percentFade>=0;percentFade-=0.01){
		diffRed = Math.trunc((diffRed * percentFade) + startColor.red);
		diffGreen = Math.trunc((diffGreen * percentFade) + startColor.green);
		diffBlue = Math.trunc((diffBlue * percentFade) + startColor.blue);
		console.log(diffRed);
		newValue="#"+diffRed.toString(16)+diffGreen.toString(16)+diffBlue.toString(16);
		ctx.clearRect(0, 0, c.width, c.height);
		ctx.fillStyle=newValue;
		
		drawBezier();
	}
}
function RGBToHex(rgb) {
	// Choose correct separator
	let sep = rgb.indexOf(",") > -1 ? "," : " ";
	// Turn "rgb(r,g,b)" into [r,g,b]
	rgb = rgb.substr(4).split(")")[0].split(sep);

	let r = (+rgb[0]).toString(16),
		g = (+rgb[1]).toString(16),
		b = (+rgb[2]).toString(16);

	if (r.length == 1)
		r = "0" + r;
	if (g.length == 1)
		g = "0" + g;
	if (b.length == 1)
		b = "0" + b;

	return "#" + r + g + b;
}