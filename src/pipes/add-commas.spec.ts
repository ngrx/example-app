import {
  describe, it, beforeEach
} from '@angular/core/testing';

import { AddCommasPipe } from './add-commas';

describe('AddCommasPipe', () => {

  let pipe: AddCommasPipe;

  beforeEach(() => {
    pipe = new AddCommasPipe();
  });

  it('transforms ["Alice", "Bob"] to "Alice and Bob"', () => {
    expect(pipe.transform(['Alice', 'Bob'])).toEqual('Alice and Bob');
  });

  it('transforms ["Alice", "Bob", "Harry"] to "Alice, Bob and Harry"', () => {
    expect(pipe.transform(['Alice', 'Bob', 'Harry'])).toEqual('Alice, Bob and Harry');
  });

  it('transforms undefined to "Author Unknown"', () => {
    expect(pipe.transform(undefined)).toEqual('Author Unknown');
  });

});
