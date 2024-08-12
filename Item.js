class Item {
    constructor(itemName, price) {
        this.itemName = itemName;
        this.price = price;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add(itemName, price) {
        const newItem = new Item(itemName, price);
        if (!this.head) {
            this.head = newItem;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newItem;
        }
    }

    printList() {
        let current = this.head;
        while (current) {
            console.log(`Item: ${current.itemName}, Price: ${current.price}`);
            current = current.next;
        }
    }
}

module.exports = LinkedList;