class Node{
    constructor(content){
        this.data = content
        this.next = null
    }
}

let head = null
let linkListArray = ""

function reverseLinkList(head){
    let currentNode = head;
    let previousNode = null;
    while ( currentNode ) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
};

function printLinkedList(head) {
    let linkListArr = ""
    let temp = head 
    while(temp) {
        if(temp.next){
            linkListArr += ` ` + `${temp.data}`
            linkListArr += ` ` + `-->` 
        } else {
            linkListArr += ` ` + `${temp.data}`
            return linkListArr
        }
        temp = temp.next;
    }   
}

function addNode(value){
    let newNode = new Node(value)
    if (!head) {
        head = newNode 
        return
    }
    let current = head
    while (current.next) {
        current = current.next
    }
    current.next = newNode
}

addNode(10)
addNode(20)
addNode(30)
addNode(40)

console.log("Given linked list")
console.log(linkListArray = printLinkedList(head))
head = reverseLinkList(head)
console.log("Reversed linked list")
console.log(linkListArray = printLinkedList(head))

module.exports = {head, printLinkedList}