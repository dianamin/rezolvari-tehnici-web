var adauga = function(info) {
	var articles = document.querySelectorAll('article');
	articles.forEach(function(article) {
		var p = document.createElement('p');
		p.appendChild(document.createTextNode(info));
		article.appendChild(p);
	})
}

adauga('Diana e o sefa!');