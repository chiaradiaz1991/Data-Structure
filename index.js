

function createQueue () {
  //collection of items that has the principle FIFO (first in first out)
  let queue= [];
  return {
    //add enqueue
    enqueue(item){
      queue.unshift(item) // add item from one side and remove on the other side
    }, 
    // remove or dequeue final item from the array
    dequeue() {
      return queue.pop()
    },
    // peek will return the item that is next to be removed
    peek(){
      return queue[queue.length -1]
    },
    // length
    get length(){
      return queue.length
    },
    // isEmpty
    isEmpty() {
      return queue.length == 0
    }
  }
}

const q = createQueue()

q.enqueue('tomato')
q.enqueue('carrot')
q.enqueue('bread')

q.dequeue();
q.dequeue();
q.dequeue();

console.log(q.isEmpty());
console.log(q.peek());