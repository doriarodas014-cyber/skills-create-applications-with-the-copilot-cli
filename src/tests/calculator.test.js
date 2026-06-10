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

  // New tests for extended operations
  test('modulo: 5 % 2 => 1', () => {
    expect(calc.mod(5, 2)).toBe(1);
    expect(calc.compute('%', 5, 2)).toBe(1);
  });

  test('power: 2 ^ 3 => 8', () => {
    expect(calc.pow(2, 3)).toBe(8);
    expect(calc.power(3, 4)).toBe(81);
    expect(calc.compute('pow', 2, 3)).toBe(8);
  });

  test('square root: sqrt(16) => 4', () => {
    expect(calc.squareRoot(16)).toBe(4);
    expect(calc.sqrt(9)).toBe(3);
  });

  test('square root of negative should throw', () => {
    expect(() => calc.squareRoot(-4)).toThrow('Cannot take square root of negative number');
  });
});
