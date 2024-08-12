// test.js
const LinkedList = require('./LinkedList');

function testLinkedList() {
    const list = new LinkedList();
    list.add('Apple', 1.5);
    list.add('Banana', 0.5);
    list.add('Cherry', 2.0);
    console.log('Linked List:');
    list.printList();
}

testLinkedList();