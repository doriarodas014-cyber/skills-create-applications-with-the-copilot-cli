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
  console.error('Commands: add, sub, mul, div (aliases supported).');
}

function toNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : NaN;
}

const [, , command, aArg, bArg] = process.argv;

if (!command || aArg === undefined || bArg === undefined) {
  printUsage();
  process.exit(1);
}

const a = toNumber(aArg);
const b = toNumber(bArg);

if (Number.isNaN(a) || Number.isNaN(b)) {
  console.error('Error: both operands must be valid numbers.');
  process.exit(1);
}

const ops = {
  add: (x, y) => x + y,
  '+': (x, y) => x + y,

  subtract: (x, y) => x - y,
  sub: (x, y) => x - y,
  '-': (x, y) => x - y,

  multiply: (x, y) => x * y,
  mul: (x, y) => x * y,
  '*': (x, y) => x * y,

  divide: (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero');
    }
    return x / y;
  },
  div: (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero');
    }
    return x / y;
  },
  '/': (x, y) => {
    if (y === 0) {
      throw new Error('Division by zero');
    }
    return x / y;
  }
};

const op = command.toLowerCase();

if (!Object.prototype.hasOwnProperty.call(ops, op)) {
  console.error(`Error: unsupported operation "${command}".`);
  printUsage();
  process.exit(1);
}

try {
  const result = ops[op](a, b);
  // Print numeric result to stdout for scripting compatibility
  console.log(result);
  // Exit 0 on success
  process.exit(0);
} catch (err) {
  console.error('Error:', err.message || err);
  process.exit(1);
}
