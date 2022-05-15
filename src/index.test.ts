import { describe, it, expect } from 'vitest';
import p from '.';


describe('vitest-tool-ts', () => {
  it('hello', () => {
    expect(p.hello()).toBe('hello');
  });
});
