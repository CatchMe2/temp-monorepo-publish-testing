import { describe, it, expect } from 'vitest';
import { hello } from './index.js';

describe('hello', () => {
  it('should return a greeting with the provided name', () => {
    const result = hello('World');
    expect(result).toBe('Hello, World v2!');
  });
});
