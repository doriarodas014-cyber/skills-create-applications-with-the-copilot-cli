const calc = require('../lib/calculator-core');

describe('Calculator core operations', () => {
  test('2 + 3 => 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(calc.sub(10, 4)).toBe(6);
  });

  test('45 * 2 => 90', () => {
    expect(calc.mul(45, 2)).toBe(90);
  });

  test('20 / 5 => 4', () => {
    expect(calc.div(20, 5)).toBe(4);
  });

  test('division by zero should throw', () => {
    expect(() => calc.div(1, 0)).toThrow('Division by zero');
  });

  test('compute supports aliases and symbols', () => {
    expect(calc.compute('+', 2, 3)).toBe(5);
    expect(calc.compute('sub', 5, 2)).toBe(3);
    expect(calc.compute('*', 4, 6)).toBe(24);
    expect(calc.compute('div', 8, 2)).toBe(4);
  });
});
