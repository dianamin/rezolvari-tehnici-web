var i = 0;
var DFS = function(element) {
	if (element.tagName == 'FIGCAPTION') {
		i++;
		element.innerText = 'Figura ' + i;
	}

	element.childNodes.forEach(function(child) {
		DFS(child);
	})
}

var solutiePentru10 = function() {
	DFS(document);
}

solutiePentru10();