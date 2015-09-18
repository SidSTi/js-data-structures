var Stack = require('./../Stack.js'),
	Queue = require('./../Queue.js'),
	LinkedList = require('./../LinkedList.js'),
	BinaryTree = require('./../BinaryTree.js');


var myStack = new Stack();
var myQueue = new Queue();
var myList = new LinkedList();
var myTree = new BinaryTree();

for (var i = 1; i < 6; i++) {
	myStack.push(i);
	myQueue.enqueue(i);
	myList.append(i);	
}

var arr = [15, 12, 25, 44, 3, 1, 5];

arr.forEach(function(elem) {
	myTree.addNode(elem);
});

//console.log(myTree.root.data, myTree.root.leftChild.data, myTree.root.rightChild.data);

myTree.displayInOrder(myTree.root);

console.log(myTree.searchNode(45));

/*myList.addAfter(7, 2);

console.log(myList.displayAll() + " and Total elements : " + myList.totalCount);
myList.delete(2);
console.log(myList.displayAll() + " 2nd last element in the list is : " + myList.nthLastElem(2));
console.log(myList.indexOf(1))*/