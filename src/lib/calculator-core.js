// Core calculator functions for testing
// Supported operations:
// - Addition (add, +)
// - Subtraction (subtract, sub, -)
// - Multiplication (multiply, mul, *)
// - Division (divide, div, /)
// - Modulo (mod, %)
// - Power (pow, power, **)
// - Square root (sqrt)

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) throw new Error('Cannot take square root of negative number');
  return Math.sqrt(n);
}

function compute(op, a, b) {
  const o = String(op).toLowerCase();
  switch (o) {
    case 'add':
    case '+':
      return add(a, b);
    case 'subtract':
    case 'sub':
    case '-':
      return subtract(a, b);
    case 'multiply':
    case 'mul':
    case '*':
      return multiply(a, b);
    case 'divide':
    case 'div':
    case '/':
      return divide(a, b);
    case 'mod':
    case '%':
      return modulo(a, b);
    case 'pow':
    case 'power':
    case '**':
    case '^':
      return power(a, b);
    default:
      throw new Error('Unsupported operation');
  }
}

module.exports = {
  add,
  sub: subtract,
  subtract,
  mul: multiply,
  multiply,
  div: divide,
  divide,
  mod: modulo,
  modulo,
  pow: power,
  power,
  sqrt: squareRoot,
  squareRoot,
  compute
};
