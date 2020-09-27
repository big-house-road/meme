interface QueueInterface<T> {
  size: () => number;
  empty: () => void;
  head: () => T;
  poll: () => void;
  push: (value: T) => void;
  clear: () => void;
}

export default class Queue<T> implements QueueInterface<T> {
  private data: T[] = [];
  constructor(values?: T[]) {
    if (Array.isArray(values)) {
      values.forEach((value) => this.data.push(value));
    }
  }

  size() {
    return this.data.length;
  }

  empty() {
    return this.data.length === 0;
  }

  head() {
    if (this.empty()) {
      throw new Error('queue is empty');
    }
    return this.data[this.data.length - 1];
  }

  poll() {
    if (this.empty()) {
      throw new Error('queue is empty');
    }
    this.data.shift();
  }

  push(value: T) {
    this.data.push(value);
  }

  clear() {
    for (let i = 0; i < this.data.length; i++) {
      this.poll();
    }
  }
}
