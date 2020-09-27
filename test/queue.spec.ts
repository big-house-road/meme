import Queue from '../src/DS/Queue';

let q;
beforeEach(() => {
  q = new Queue([1]);
});

describe('queue', () => {
  test('method size', () => {
    expect(q.size()).toBe(1);
    q.push(2);
    expect(q.size()).toBe(2);
  });

  test('method empty', () => {
    expect(q.empty()).toBeFalsy();
    q.poll();
    expect(q.empty()).toBeTruthy();
  });

  test('method head', () => {
    expect(q.head()).toBe(1);
    q.poll();
    expect(() => q.head()).toThrow(new Error('queue is empty'));
  });

  test('method poll', () => {
    q.poll();
    expect(() => q.poll()).toThrow(new Error('queue is empty'));
  });

  test('method push', () => {
    q.push(1);
    expect(q.size()).toBe(2);
  });

  test('method clear', () => {
    q.clear();
    expect(q.size()).toBe(0);
  });
});
