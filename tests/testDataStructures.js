var Stack = require('./../Stack.js'),
	Queue = require('./../Queue.js'),
	LinkedList = require('./../LinkedList.js');


var myStack = new Stack();
var myQueue = new Queue();
var myList = new LinkedList();

for (var i = 1; i < 6; i++) {
	myStack.push(i);
	myQueue.enqueue(i);
	myList.append(i);	
}

myList.addAfter(7, 2);

console.log(myList.displayAll() + " and Total elements : " + myList.totalCount);
myList.delete(2);
console.log(myList.displayAll() + " 2nd last element in the list is : " + myList.nthLastElem(2));
console.log(myList.indexOf(1))