/* 
    JavaScript Queue.
    FIFO = First In, First Out.
    Front = First item in queue
    Back = Last item in queue.
    Enqueue = Added to the back of the queue.
    Dequeue = Removed from the front of the queue.
*/

// Model the queue
class Queue {
    constructor() {
        this.queue = [];
    }
    //Add items to queue 
    enqueue(item) {
        this.queue.push(item);
        console.log(`${item} added to the queue.`)
    }
    //Remove items from queue
    dequeue() {
        if (this.queue.length > 0) {
            const item = this.queue.shift();
            console.log(`${item} grabbed from the queue.`)
        } else {
        console.log("Queue is empty.")
        }
    }
}

// Create a new queue
const next = new Queue();

next.enqueue('First');
next.enqueue('Second');
next.enqueue('Third');
next.dequeue();
next.dequeue();
next.dequeue();
next.dequeue();