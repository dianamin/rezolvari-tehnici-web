var list1 = document.querySelector('#lista1');
var list2 = document.querySelector('#lista2');

document.onkeydown = function(event) {
	var index = event.keyCode - 48;
	if (0 > index || index > 9)
		return;

	if (list1.children.length <= index || list2.children.length <= index){
		alert("Nu sunt suficiente elemente in cele doua liste!");
		return;
	}

	var child1 = list1.children[index];
	var child2 = list2.children[index];
	console.log(list1.children);
	console.log(child1);

	var aux = child1.textContent;
	child1.textContent = child2.textContent;
	child2.textContent = aux;
}