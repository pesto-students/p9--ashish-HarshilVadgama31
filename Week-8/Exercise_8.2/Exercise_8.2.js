class Node{
    constructor(content){
        this.data = content
        this.next = null
    }
}

class LinkList{
    constructor(){
        this.head = null
        this.size = 0
    }

    addNode(value){
        var nodeToAdd =  new Node(value)
        var currentNode

        if(this.head==null) this.head = nodeToAdd
        else{
            currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = nodeToAdd
        }
        this.size++
    }

    printLinkedList() {
        let linkListArr = ""
        let temp = this.head 
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

    shiftLeftLinkList(count){
        if(count < this.size){
            while(count>0){
                let currentNode = this.head
                let previousNode = this.head
                while(currentNode.next){
                    currentNode = currentNode.next
                }
                this.head = this.head.next
                currentNode.next = previousNode
                previousNode.next = null
                count--
            }
            return this.printLinkedList()
        } 
        else{
            return console.log('Linked List Size is less than the rotation requested')
        }
        
    }
}

let A = new LinkList()


A.addNode(10)
A.addNode(20)
A.addNode(30)
A.addNode(40)
A.addNode(50)
A.addNode(60)

console.log("Link List Before Rotation:")
console.log(A.printLinkedList())
console.log("Link List After Rotation:")
console.log(A.shiftLeftLinkList(3))
// A.printLinkedList()

module.exports = A