function check(){
	if(document.getElementById('R1').checked) {
		var x = document.getElementById('NikeVis1');
		var y = document.getElementById('NikeVis2');
		var z = document.getElementById('NikeVis3');
		if (x.style.display === 'none') {
			var x = document.getElementById('NikeVis1');
			var y = document.getElementById('NikeVis2');
			var z = document.getElementById('NikeVis3');
			x.style.display = 'block';
			for (var i = 1; i < 100; i += 5) {
				(function(i) { 
				setTimeout(function() {
					NikeVis1.style.opacity = (0 + i) * 0.01;
				}, i * 10);
				})(i);
			}
			y.style.display = 'none';
			z.style.display = 'none';
		}else{
			for (var i = 1; i < 100; i += 5) { 
				(function(i) { 
				setTimeout(function() {
					NikeVis1.style.opacity = (100 + i) * 0.01;
				}, i * 10);
				})(i);
			}
			x.style.display = 'none';
		}
	}if(document.getElementById('R2').checked) {
		var x = document.getElementById('NikeVis1');
		var y = document.getElementById('NikeVis2');
		var z = document.getElementById('NikeVis3');
		if (y.style.display === 'none') {
			y.style.display = 'block';
			for (var i = 1; i < 100; i += 5) {
				(function(i) { 
				setTimeout(function() {
					NikeVis2.style.opacity = (0 + i) * 0.01;
				}, i * 10);
				})(i);
			}
			z.style.display = 'none';
			x.style.display = 'none';
		} else {
			
			y.style.display = 'none';
		}
	}if(document.getElementById('R3').checked) {
		var x = document.getElementById('NikeVis1');
		var y = document.getElementById('NikeVis2');
		var z = document.getElementById('NikeVis3');
		if (z.style.display === 'none') {
			z.style.display = 'block';
			for (var i = 1; i < 100; i += 5) { 
				(function(i) { 
				setTimeout(function() {
					NikeVis3.style.opacity = (0 + i) * 0.01;
				}, i * 10);
				})(i);
			}
			x.style.display = 'none';
			y.style.display = 'none';
		}
		else {
			
			z.style.display = 'none';
		}
	}
}