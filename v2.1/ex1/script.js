var schimba = function(a, stil) {
	var children = a.children;
	for (var i = 0; i < children.length; i++) {
		if (children[i].classList.length == 0 && children[i].tagName === 'H1')
			children[i].classList.add('stil');
	}
}

var section = document.querySelector('section');
schimba(section, 'stil');
