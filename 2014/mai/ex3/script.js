var adaugaSpan = function(p) {
	var newElement = document.createElement('span');
	newElement.appendChild(document.createTextNode(' Final'));
	p.appendChild(newElement);	
}

var paragraf = document.getElementById('adaug');
var buton = document.getElementById('click');

buton.onclick = function() {
	adaugaSpan(paragraf);
}
