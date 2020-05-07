$(document).ready(function(){
	$("#NikeVis2").hide();
});
$(document).ready(function(){
	$("#NikeVis3").hide();
});
$(function(){
	$("#btn1").click(function(){
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		$("#NikeVis2").fadeOut(1000);
		$("#NikeVis3").fadeOut(1000);
		setTimeout(function(){
			document.getElementById("btn1").disabled = false;
			document.getElementById("btn2").disabled = false;
			document.getElementById("btn3").disabled = false; }, 2000);
		setTimeout(function(){$("#NikeVis1").fadeIn(1000); }, 1000);
	});
});
$(function(){
	$("#btn2").click(function(){
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		$("#NikeVis1").fadeOut(1000);
		$("#NikeVis3").fadeOut(1000);
		setTimeout(function(){
			document.getElementById("btn1").disabled = false;
			document.getElementById("btn2").disabled = false;
			document.getElementById("btn3").disabled = false; }, 2000);
		setTimeout(function(){$("#NikeVis2").fadeIn(1000); }, 1000);
	});
});
$(function(){
	$("#btn3").click(function(){
		document.getElementById("btn1").disabled = true;
		document.getElementById("btn2").disabled = true;
		document.getElementById("btn3").disabled = true;
		$("#NikeVis1").fadeOut(1000);
		$("#NikeVis2").fadeOut(1000);
		setTimeout(function(){
			document.getElementById("btn1").disabled = false;
			document.getElementById("btn2").disabled = false;
			document.getElementById("btn3").disabled = false; }, 2000);
		setTimeout(function(){$("#NikeVis3").fadeIn(1000); }, 1000);
	});
});