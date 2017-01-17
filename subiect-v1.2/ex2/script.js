var creeaza_div = function(n) {
	var div = document.createElement('div');
	div.id = n;
	var height = 10 + n * 10;
	var width = 10 + n * 10;
	div.style.height = height + 'px';
	div.style.width = width + 'px';

	div.onclick = function() {
		alert(this.id);
	}

	if (n == 1) return div;
	var child = creeaza_div(n - 1);

	div.appendChild(child);
	return div;
}

document.body.appendChild(creeaza_div(10));