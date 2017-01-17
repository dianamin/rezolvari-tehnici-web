var count = 0;

document.body.onclick = function(event) {
	++count;
	var x = event.clientX;
	var y = event.clientY;

	var button = document.createElement('button');
	button.style.position = 'absolute';
	button.style.top = y + 'px';
	button.style.left = x + 'px';
	button.appendChild(document.createTextNode(count));
	document.body.appendChild(button);

	setTimeout(function() {
		document.body.removeChild(button);
	}, 10000);
}