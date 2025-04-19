import { add } from '../stringCalculator';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number itself for single number', () => {
    expect(add('1')).toBe(1);
  });

  test('returns sum of two numbers', () => {
    expect(add('1,5')).toBe(6);
  });

  test('handles new lines between numbers', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('throws exception for negative numbers', () => {
    expect(() => add('-1,2,-3')).toThrow('negative numbers not allowed -1, -3');
  });

  test('handles multiple numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('ignores invalid numbers', () => {
    expect(add('1,abc,3')).toBe(4);
  });
 
}); 