import Stack from '../src/DS/Stack';

// jest.mock('../src/DS/Stack');

describe('Stack', () => {
  test('push', () => {
    const s = new Stack();
    let val = s.push(1);
    expect(val).toBe(1);
    expect(s.size()).toBe(1);
    s.push([2, 3]);
    expect(s.size()).toBe(3);
  });

  test('empty', () => {
    const s = new Stack();
    expect(s.empty()).toBeTruthy();
    s.push(1);
    expect(s.empty()).toBeFalsy();
  });

  test('size', () => {
    let s = new Stack();
    expect(s.size()).toBe(0);
    s.push(1);
    expect(s.size()).toBe(1);
    s = new Stack([1, 2, 3]);
    expect(s.size()).toBe(3);
  });

  test('pop', () => {
    let s = new Stack([1, 2, 3]);
    expect(s.pop()).toBe(3);
    expect(s.size()).toBe(2);
    expect(s.pop()).toBe(2);
  });

  test('top() should throw an error when is empty', () => {
    const s = new Stack();
    expect(() => s.top()).toThrow();
  });

  test('pop() should throw an error when is empty', () => {
    const s = new Stack();
    expect(() => s.pop()).toThrow();
  });
});
