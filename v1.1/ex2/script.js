var alert = document.querySelector('div');
var input = document.querySelector('input');
var button = document.querySelector('button');
var select = document.querySelector('select');

alert.style.display = 'none';

var addOption = function(optionText) {
	var option = document.createElement('option');
	option.appendChild(document.createTextNode(optionText));
	select.appendChild(option);
}

var onChange = function() {
	addOption(input.value);
}

var showDiv = function() {
	alert.style.display = 'block';
}

input.addEventListener('change', showDiv);

button.onclick = function() {
	alert.style.display = 'none';
	input.removeEventListener('change', showDiv);
	input.addEventListener('change', onChange);
	setTimeout(function() {
		input.removeEventListener('change', onChange);
		input.addEventListener('change', showDiv);
	}, 5 * 60 * 1000);
}
