#!/usr/bin/env node

// Calculator CLI
// Supported operations:
// - Addition (add, +)
// - Subtraction (subtract, sub, -)
// - Multiplication (multiply, mul, *)
// - Division (divide, div, /)
//
// Usage examples:
//   node src/calculator.js add 2 3    # outputs: 5
//   node src/calculator.js sub 5 2    # outputs: 3
//   node src/calculator.js mul 4 6    # outputs: 24
//   node src/calculator.js div 8 2    # outputs: 4

function printUsage() {
  console.error('Usage: node src/calculator.js <command> <num1> <num2>');
  console.error('For unary commands (sqrt): node src/calculator.js sqrt <num>');
  console.error('Commands: add, sub, mul, div, mod, pow, sqrt (aliases supported).');
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

// New math helpers
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

const [, , command, aArg, bArg] = process.argv;

if (!command) {
  printUsage();
  process.exit(1);
}

const op = command.toLowerCase();

// Define unary (1-arg) and binary (2-arg) operations
const unaryOps = {
  sqrt: (x) => squareRoot(x),
  '√': (x) => squareRoot(x)
};

const binaryOps = {
  add: (x, y) => x + y,
  '+': (x, y) => x + y,

  subtract: (x, y) => x - y,
  sub: (x, y) => x - y,
  '-': (x, y) => x - y,

  multiply: (x, y) => x * y,
  mul: (x, y) => x * y,
  '*': (x, y) => x * y,

  divide: (x, y) => {
    if (y === 0) throw new Error('Division by zero');
    return x / y;
  },
  div: (x, y) => {
    if (y === 0) throw new Error('Division by zero');
    return x / y;
  },
  '/': (x, y) => {
    if (y === 0) throw new Error('Division by zero');
    return x / y;
  },

  mod: (x, y) => modulo(x, y),
  '%': (x, y) => modulo(x, y),

  pow: (x, y) => power(x, y),
  power: (x, y) => power(x, y),
  '**': (x, y) => power(x, y)
};

try {
  if (Object.prototype.hasOwnProperty.call(unaryOps, op)) {
    if (aArg === undefined) {
      console.error('Error: missing operand for unary operation.');
      printUsage();
      process.exit(1);
    }
    const a = toNumber(aArg);
    if (Number.isNaN(a)) {
      console.error('Error: operand must be a valid number.');
      process.exit(1);
    }
    const result = unaryOps[op](a);
    console.log(result);
    process.exit(0);
  }

  if (Object.prototype.hasOwnProperty.call(binaryOps, op)) {
    if (aArg === undefined || bArg === undefined) {
      console.error('Error: missing operands for binary operation.');
      printUsage();
      process.exit(1);
    }
    const a = toNumber(aArg);
    const b = toNumber(bArg);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      console.error('Error: both operands must be valid numbers.');
      process.exit(1);
    }
    const result = binaryOps[op](a, b);
    console.log(result);
    process.exit(0);
  }

  console.error(`Error: unsupported operation "${command}".`);
  printUsage();
  process.exit(1);
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(1);
}
