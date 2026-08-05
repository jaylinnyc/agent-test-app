function greet(name) {
  if (name === null || name === undefined || typeof name !== 'string') {
    return 'Hello, stranger!'
  }
  return 'Hello, ' + name + '!'
}

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers')
  }
  return a + b
}

function subtract(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers')
  }
  return a - b
}

function multiply(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments must be numbers')
  }
  return a * b
}

module.exports = { greet, add, subtract, multiply }
