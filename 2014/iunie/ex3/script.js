/**
 * Am pus 2 secunde in loc de 5 minute si 10 secunde in loc de 3 ore.
 */

var intervalId = setInterval(function() {
	alert("Vreau 10 la examen!");
}, 2000)

setTimeout(function() {
	clearInterval(intervalId);
}, 10000);