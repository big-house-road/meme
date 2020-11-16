import DoublyLinkedList from '../src/DS/DoublyLinkedList/DoublyLinkedList';
import DoublyLinkedListNode from '../src/DS/DoublyLinkedList/DoublyLinkedListNode';

const range = (n = 0) =>
  Array(n)
    .fill(0)
    .map((_, i) => i);

let values;
let list;

beforeEach(() => {
  values = range(3);
  list = new DoublyLinkedList(values);
});

describe('DoublyLinkedList', () => {
  test('should create an empty list', () => {
    const emptyList = new DoublyLinkedList();
    expect(emptyList.size).toBe(0);
    expect(emptyList.head).toBe(null);
    expect(emptyList.tail).toBe(null);
  });

  test('should create an non-empty list', () => {
    values = range(3);
    list = new DoublyLinkedList(values);
    expect(list.size).toBe(3);
    expect(list.head.value).toBe(0);
    expect(list.tail.value).toBe(2);
  });

  test('should append a node #1', () => {
    expect(list.size).toBe(3);
    expect(list.tail.value).toBe(2);
    list.append(3);
    expect(list.size).toBe(4);
    expect(list.tail.value).toBe(3);
  });

  test('should append a node #2', () => {
    list = new DoublyLinkedList([]);
    list.append(1);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
  });

  test('should prepend a node #1', () => {
    expect(list.size).toBe(3);
    expect(list.head.value).toBe(0);
    list.prepend(3);
    expect(list.size).toBe(4);
    expect(list.head.value).toBe(3);
  });

  test('should prepend a node #2', () => {
    list = new DoublyLinkedList([]);
    list.prepend(1);
    expect(list.size).toBe(1);
    expect(list.head.value).toBe(1);
    expect(list.tail.value).toBe(1);
  });

  test('should delete a node #1', () => {
    // middle node
    expect(list.size).toBe(3);
    const deletedNode = list.search((v) => v === 1);
    list.delete(deletedNode);
    expect(list.size).toBe(2);

    expect(list.search((v) => v === 1)).toBe(null);
  });

  test('should delete a node #2', () => {
    // head node
    list.delete(list.head);
    expect(list.size).toBe(2);
    expect(list.head.value).toBe(1);
    expect(list.search((v) => v === 0)).toBe(null);
  });

  test('should delete a node #3', () => {
    // tail node
    list.delete(list.tail);
    expect(list.size).toBe(2);
    expect(list.tail.value).toBe(1);
    expect(list.search((v) => v === 2)).toBe(null);
  });

  test('should delete a node #4', () => {
    // non-existing node
    const deletedNode = new DoublyLinkedListNode(100);
    list.delete(deletedNode);
    expect(list.size).toBe(3);
    expect(list.head.value).toBe(0);
    expect(list.tail.value).toBe(2);
    expect(list.search((v) => v === 100)).toBe(null);
  });

  test('should delete a node #5', () => {
    // only node
    const list = new DoublyLinkedList([1]);
    list.delete(list.head);
    expect(list.size).toBe(0);
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test('should search a node', () => {
    const target = list.search((v) => v === 1);
    expect(target.value).toBe(1);
  });

  test('should traverse list', () => {
    expect(list.traverse()).toEqual(values);
  });
});
