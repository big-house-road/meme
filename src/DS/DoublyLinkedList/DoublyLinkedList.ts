import DoublyLinkedListNode from './DoublyLinkedListNode';

interface IDoublyLinkedList<T> {
  prepend(value: T): DoublyLinkedListNode<T>;
  append(value: T): DoublyLinkedListNode<T>;
  delete(node: DoublyLinkedListNode<T>): void;
  traverse(): T[];
  search(comparator: (value: T) => boolean): DoublyLinkedListNode<T> | null;
}

export default class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
  private _head: DoublyLinkedListNode<T>;
  private _tail: DoublyLinkedListNode<T>;
  private _length: number = 0;

  private _incLength(addend: number): void {
    this._length += addend;
    if (this._length < 0) this._length = 0;
  }

  private _insertAfter(
    node: DoublyLinkedListNode<T>,
    inserted: DoublyLinkedListNode<T>
  ): void {
    inserted.next = node.next;
    node.next.prev = inserted;
    inserted.prev = node;
    node.next = inserted;
  }

  private _insertBefore(
    node: DoublyLinkedListNode<T>,
    inserted: DoublyLinkedListNode<T>
  ): void {
    inserted.prev = node.prev;
    node.prev.next = inserted;
    inserted.next = node;
    node.prev = inserted;
  }

  constructor(array?: T[]) {
    this._head = new DoublyLinkedListNode(null);
    this._tail = new DoublyLinkedListNode(null);
    this._head.next = this._tail;
    this._tail.prev = this._head;

    if (Array.isArray(array)) {
      array.forEach((val: T) => this.append(val));
    }
  }

  get head(): DoublyLinkedListNode<T> {
    return this._head.next === this._tail ? null : this._head.next;
  }

  get tail(): DoublyLinkedListNode<T> {
    return this._tail.prev === this._head ? null : this._tail.prev;
  }

  get size(): number {
    return this._length;
  }

  append(value: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode(value);

    this._insertBefore(this._tail, node);

    this._incLength(1);
    return node;
  }

  prepend(value: T): DoublyLinkedListNode<T> {
    const node = new DoublyLinkedListNode(value);

    this._insertAfter(this._head, node);

    this._incLength(1);
    return node;
  }

  delete(target: DoublyLinkedListNode<T>): void {
    let cur = this._head.next;
    // To make sure that target belongs to the linked list.
    while (cur !== this._tail) {
      if (cur === target) {
        target.prev.next = target.next;
        target.next.prev = target.prev;
        target.prev = null;
        target.next = null;
        this._incLength(-1);
        return;
      }
      cur = cur.next;
    }
  }

  traverse(): T[] {
    const res = [];
    let cur = this._head.next;

    while (cur !== this._tail) {
      res.push(cur.value);
      cur = cur.next;
    }
    return res;
  }

  search(comparator: (value: T) => boolean): DoublyLinkedListNode<T> | null {
    let cur = this._head.next;

    while (cur !== this._tail) {
      if (comparator(cur.value)) return cur;
      cur = cur.next;
    }

    return null;
  }
}
