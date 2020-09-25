interface StackInterface<T> {
  top: () => T;
  push: (value: T) => T;
  pop: () => T;
  size: () => number;
  empty: () => boolean;
}

class Stack<T> implements StackInterface<T> {
  private data: T[] = [];
  constructor(value?: T[] | T) {
    if (typeof value !== 'undefined') {
      this.push(value);
    }
  }

  top() {
    if (this.empty()) {
      throw new Error('stack is empty');
    }
    return this.data[this.data.length - 1];
  }

  push(value: T | T[]) {
    if (Array.isArray(value)) {
      value.forEach((v) => this.data.push(v));
    } else {
      this.data.push(value);
    }
    return this.top();
  }

  pop() {
    if (this.empty()) {
      throw new Error('stack is empty');
    }
    return this.data.pop();
  }

  size() {
    return this.data.length;
  }

  empty() {
    return this.size() === 0;
  }
}

export default Stack;
