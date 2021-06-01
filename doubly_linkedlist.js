class Node {
    constructor(value) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}
class doublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //adding node at end of list
    add = function (val) {
        // created the new Node
        const newNode = new Node(val);
        if (!this.length) {
            // when the length is zero we are just setting the same node as head and tail
            this.head = newNode;
            this.tail = newNode;
        } else {
            //new node will be the new tail and the next item to the current tail
            this.tail.next = newNode;
            //since newNode will be added to the last node,and hence is the new tail and the item previous to new Node will be current tail
            newNode.previous = this.tail;
            //since newNode will be added to the last node,and hence is the new tail
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    };
    //removing node from end
    pop = function () {
        if (!this.length) {
            return null;
        } else {
            //here  we are selecting the tail of the list as it will be removed
            const nodeToRemove = this.tail;
            if (this.length == 1) {
                //id the length of the linked list is 1 then the only item will be removed and left behind head and tail will be null
                this.tail = null;
                this.head = null;
            } else {
                //setting the current tail to the second last tail as last one will be removed
                this.tail = this.tail.previous;
                //setting the next to tail equals to the null
                this.tail.next = null;
                //removing the connection of the removed tail node from the new tail
                nodeToRemove.previous = null;
            }
            this.length--;
            return nodeToRemove;
        }
    };
    //adding node at start
    unshift = function (val) {
        //creating the new node
        const newNode = new Node(val);

        if (!this.length) {
            //if the lenght is zero then we simply set the and tail to the new node
            this.head = newNode;
            this.tail = newNode;
        } else {
            //connecting the new node with the current head as new node will replace the current node and curent node will be at number 2
            newNode.next = this.head;
            //connecting the previous of current head equals to the new node
            this.head.previous = newNode;

            //after connecting the new node with current head we will set the new Node as the new Head
            this.head = newNode;
        }
        this.length++;
        return newNode;
    };
    //removing node from start
    shift = function () {
        if (!this.length) {
            return null;
        } else {
            //here we are selecting the head as the node to be removed as shift will remove the first node while in  pop we selected the last item as in that case last item is to be removed
            const nodeToRemove = this.head;
            if (this.length == 1) {
                this.head = null;
                this.tail = null;
            } else {
                //setting the new head equals to the next value as the current head will be removed
                this.head = nodeToRemove.next;
                // removing the connection  of the current remoeved node with the list by setting the next value equal tp null
                nodeToRemove.next = null;
                //setting the previopus of the new head eqaul to null
                this.head.previous = null;
            }
            this.length--;
            return nodeToRemove;
        }
    };
    //get the node with the index number of the
    get = function (index) {
        //here we are checking if the index is a valid number or not
        if (!this.length || index < 0 || index >= this.length) {
            return null;
        } else {
            //define a variable which will be the desired value
            let currentNode;
            // to make the program faster we are checking whether our desired value is present in first half or last half. if the value is present in first half then we start checking from head side,but it the value is present in last half then we will check from tail side.
            if (index < this.length / 2) {
                let counter = 0;
                //start the value from head
                currentNode = this.head;
                //checking every Node whose index is less than desired value's index number
                while (counter < index) {
                    //setting the current node equals to the next Node
                    currentNode = currentNode.next;
                    counter++;
                }
            } else {
                //this time we are starting from last and decreasing the value till it is greater than the index value of desired value
                let counter = this.length - 1;
                currentNode = this.tail;
                while (counter > index) {
                    currentNode = currentNode.previous;
                    counter--;
                }
            }
            return currentNode;
        }
    };
    //changing the value of a node
    set = function (index, value) {
        //first find the node whose value we want to change from its index number
        const currentNode = this.get(index);
        //cheching if the node is present in the list of nodes
        if (currentNode) {
            // changing the value of currentNode
            currentNode.value = value;
            return currentNode;
        } else {
            //if the value is not present in the list of nodes than return null
            return null;
        }
    };
    // inserting a newnode into the list with {value}  at index {index}
    insert = function (index, value) {
        if (index < 0 || index > this.length) {
            //checking for valid index number
            return null;
        } else if (this.length === 0) {
            // if the length of the list is zero than add at first position
            return this.unshift(value);
        } else if (index === this.length) {
            //if the index is equal to length of the list than add at the lat position
            return this.add(value);
        } else {
            //creating a new node
            let newNode = new Node(value);
            //we are getting the node previous to index given because we want to add the node at that index so we select previous node and add the node after that node
            let prevNode = this.get(index - 1);
            // selecting the  next node between which we want to add our node
            let nextNode = prevNode.next;

            //connecting tghe prevNode with our given node
            newNode.previous = prevNode;
            prevNode.next = newNode;
            //connecting the next node with our given node
            newNode.next = nextNode;
            nextNode.previous = newNode;
            //increasing the length of the node
            this.length++;
        }
    };
    remove = function (index) {
        // if the index is invalid, return null
        if (!this.length || index < 0 || index >= this.length) {
            return null;
        } else if (index === 0) {
            // if we want to remove the first node
            return this.shift();
        } else if (index === this.length - 1) {
            // if we want to remove the last node
            return this.pop();
        } else {
            // store the node we want to remove, the node before it and the node after it
            const nodeToRemove = this.get(index);
            const prevNodeToRemove = nodeToRemove.previous;
            const nextNodeToRemove = nodeToRemove.next;

            // remove the connections from the node to remove to other nodes
            nodeToRemove.previous = null;
            nodeToRemove.next = null;

            // update the connections from the node before the node to remove
            prevNodeToRemove.next = nextNodeToRemove;

            // update the connections from the node after the node to remove
            nextNodeToRemove.previous = prevNodeToRemove;

            // decrease length by 1
            this.length -= 1;

            // return node
            return nodeToRemove;
        }
    };
}

let dll = new doublyLinkedList();

dll.unshift(new Node("fourth node"));

dll.unshift(new Node("third node"));
dll.unshift(new Node("second node"));
dll.unshift(new Node("first node"));

dll.add(new Node("last node"));
dll.insert(3, "insert node");
dll.remove(3);
console.log(dll.get(3));
