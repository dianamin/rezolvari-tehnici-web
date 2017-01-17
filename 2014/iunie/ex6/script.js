var buildPage = function() {
	for (var i = 'a'; i <= 'z'; i = String.fromCharCode(i.charCodeAt(0) + 1)) {
		var button = document.createElement('button');
		button.appendChild(document.createTextNode('buton'));
		button.id = i;
		document.body.appendChild(button);
	}
}

buildPage();

var buttons = document.querySelectorAll('button');
buttons.forEach(function(button) {
	let currentButtonId = button.id;
	button.onclick = function() {
		alert(currentButtonId);
	}
});