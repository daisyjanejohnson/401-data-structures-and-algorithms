const Queue = require('../queue');
const Stack = require('../stack');

describe('Queue Testing', () => {
  it('should be a class', () => {
    expect(Queue).toBeDefined();
  });


  // ALSO SATISFIES PEEK() TEST
  it('should successfully enqueue into a queue', () => {
    const queue = new Queue;
    queue.enqueue('apples');

    expect(queue.peek()).toBe('apples');
  });

  it('should successfully enqueue multiple values into a queue', () => {
    const queue = new Queue;
    queue.enqueue('lemons');
    queue.enqueue('limes');

    expect(queue).toString('{lemons}->{limes}->null');
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    const queue = new Queue;
    queue.enqueue('lemons');
    queue.enqueue('limes');
    queue.enqueue('oranges');

    const dequeued = queue.dequeue();

    expect(dequeued).toBe('lemons');
  });

  it('can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue;

    queue.enqueue('apples');
    queue.enqueue('mangoes');
    queue.enqueue('grapes');

    queue.dequeue('apples');
    queue.dequeue('mangoes');
    queue.dequeue('grapes');

    expect(queue.isEmpty()).toBeTruthy();

  });

  it('should instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });

  it('should not be able to peek on a empty queue', () => {
    const queue = new Queue;

    expect(() => queue.peek()).toThrow(RangeError);
    expect(() => queue.peek()).toThrow('Cannot peek at empty queue');
  });

  it('should not allow dequeue from empty list', () => {
    const queue = new Queue;

    expect(() => queue.dequeue()).toThrow(RangeError);
    expect(() => queue.dequeue()).toThrow('Exception');
  });
});