# meme(么么)

实现生产可用的数据结构

## todo

- [x] Stack
- [x] Queue
- [x] LinkedList
- [x] DoublyLinkedList
- [ ] Tree
- [ ] HashTable
- [ ] Heap
- [ ] Graph

## Install

```bash
npm install meme --save
```

## Usage

### Stack

```ts
const stack = new Stack();
stack.push(1);
if (stack.empty()) {
}
```

### Linked List

```ts
// Create an empty linked list.
const linkedList = new LinkedList();

linkedList.prepend(1);
linkedList.append(2);

// The search() method returns the first node in the linked list that satisfies the provided testing function.
const node = linkedList.search((node) => node.val === 2);
linkedList.delete(node);

// The traverse() method returns an array of values of all nodes in the linked list.
linkedList.traverse(); // [1]

list.head; // returns the head node
list.tail; // returns the tail node
list.size; // returns the numbers of nodes in the linked list
```

```ts
// Create a linked list based on the provided array.
const linkedList = new LinkedList([1, 2, 3]);

linkedList.traverse(); // [1, 2, 3]
```

### Doubly Linked List

Usage of Doubly Linked List is similar to Linked List.

## Contributing

PRs accepted.

## License

MIT © Richard McRichface
