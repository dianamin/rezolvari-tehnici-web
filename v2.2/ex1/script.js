var listItems = document.querySelectorAll('#parinte li')

var count = 0;

listItems.forEach(function(listItem) {
	if (listItem.classList.contains('click'))
		count++;

	listItem.addEventListener('click', function() {
		if (listItem.classList.contains('click')) alert(count);
		else alert('Nu');
	});
});