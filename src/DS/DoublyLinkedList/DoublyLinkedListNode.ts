export default class DoublyLinkedListNode<T> {
  public prev: DoublyLinkedListNode<T> | null = null;
  public next: DoublyLinkedListNode<T> | null = null;
  constructor(public value: T) {}
}
