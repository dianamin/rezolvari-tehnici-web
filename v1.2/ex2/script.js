var select = document.querySelector('select');
var buton = document.querySelector('button');

buton.onclick = function() {
	var ul = document.createElement('ul');
	var options = select.querySelectorAll('option');
	options.forEach(function(option) {
		var li = document.createElement('li');
		li.appendChild(document.createTextNode(option.textContent));
		ul.appendChild(li);
	})
	select.parentNode.insertBefore(ul, select);
	setTimeout(function() {
		select.parentNode.removeChild(select);
	}, 30000)
}