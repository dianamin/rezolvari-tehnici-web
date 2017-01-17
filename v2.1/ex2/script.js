var coloreaza = function(color) {
	var h1s = document.querySelectorAll('h1');
	h1s.forEach(function(h1) {
		h1.style.color = color;
	})
}

var input = document.querySelector('input');
var canColor = true;

input.onchange = function() {
	if (!canColor) return;
	coloreaza(input.value);
	canColor = false;	
	setTimeout(function() {
		canColor = true;
		input.value = '';
	}, 10000);
}