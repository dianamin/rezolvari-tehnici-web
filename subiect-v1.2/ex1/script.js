var list1 = document.querySelector('#lista1');
var list2 = document.querySelector('#lista2');

var listItems = document.querySelectorAll('li');

listItems.forEach(function(listItem) {
	listItem.onclick = function(event) {
		var item = event.target;
		var parentNode = item.parentNode;
		if (parentNode === list1) {
			list1.removeChild(item);
			list2.appendChild(item);
		}
		else if (parentNode === list2) {
			list2.removeChild(item);
			list1.appendChild(item);
		}
	}
})