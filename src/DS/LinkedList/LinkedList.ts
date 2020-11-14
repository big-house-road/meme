import LinkedListNode from './LinkedListNode';

interface ILinkedList<T> {
  prepend(value: T): LinkedListNode<T>;
  append(value: T): LinkedListNode<T>;
  delete(node: LinkedListNode<T>): void;
  traverse(): T[];
  search(comparator: (value: T) => boolean): LinkedListNode<T> | null;
  [Symbol.iterator](): IterableIterator<T>;
}

export default class LinkedList<T> implements ILinkedList<T> {
  private _head: LinkedListNode<T> | null = null;
  private _tail: LinkedListNode<T> | null = null;
  private _length: number = 0;

  private _incLength(addend: number): void {
    this._length += addend;
    if (this._length < 0) this._length = 0;
  }

  private *_iterator(): IterableIterator<T> {
    let cur = this._head;

    while (cur) {
      yield cur.value;
      cur = cur.next;
    }
  }

  constructor(array?: T[]) {
    if (Array.isArray(array)) {
      array.forEach((val: T) => this.append(val));
    }
  }

  get head(): LinkedListNode<T> {
    return this._head;
  }

  get tail(): LinkedListNode<T> {
    return this._tail;
  }

  get size(): number {
    return this._length;
  }

  append(value: T): LinkedListNode<T> {
    const node = new LinkedListNode(value);

    if (!this._head) this._head = node;
    else this._tail.next = node;
    this._tail = node;

    this._incLength(1);
    return node;
  }

  prepend(value: T): LinkedListNode<T> {
    const node = new LinkedListNode(value);

    node.next = this._head;
    if (!this._head) this._tail = node;
    this._head = node;

    this._incLength(1);
    return node;
  }

  delete(target: LinkedListNode<T>): void {
    if (target === this._head) {
      this._head = target.next;
      if (!this._head) this._tail = null;
    } else {
      let prev = this._head;
      while (prev && prev.next !== target) {
        prev = prev.next;
      }

      if (prev) {
        prev.next = target.next;
        if (target === this._tail) this._tail = prev;
      } else {
        return;
      }
    }

    target.next = null;
    this._incLength(-1);
  }

  traverse(): T[] {
    return [...this];
  }

  search(comparator: (value: T) => boolean): LinkedListNode<T> | null {
    let cur = this._head;

    while (cur) {
      if (comparator(cur.value)) return cur;
      cur = cur.next;
    }

    return null;
  }

  [Symbol.iterator]() {
    return this._iterator();
  }
}
