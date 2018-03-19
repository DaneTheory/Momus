import { assert } from 'chai';
import Prometheus from '../src';

describe('Demonstrates testing using Prometheus', () => {
  it('tests the function expression `example` created in the examples folder', () => {
    assert(Prometheus(10, 40) === 50,
    'Example failed boooo');
  });
});
