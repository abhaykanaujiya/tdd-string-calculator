import { add } from '../stringCalculator';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

 
}); 