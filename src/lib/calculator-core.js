// Core calculator functions for testing
// Supported operations:
// - Addition (add, +)
// - Subtraction (subtract, sub, -)
// - Multiplication (multiply, mul, *)
// - Division (divide, div, /)

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
  compute
};
