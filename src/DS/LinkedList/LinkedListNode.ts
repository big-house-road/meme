export default class LinkedListNode<T> {
  public next: LinkedListNode<T> | null = null;
  constructor(public value: T) {}
}
