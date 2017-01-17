var intervalId;

var image = document.querySelector('img');
var i = 0;
image.onclick = function() {
	i = 0;
	intervalId = setInterval(function() {
		i++;
		alert('info ' + i);
	}, 10 * 1000);
	setTimeout(function() {
		clearInterval(intervalId);
	}, 10 * 60 * 1000);
}