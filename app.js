function greet(name) {
  console.log('Hello ' + name)
}

function add(a, b) {
  return a - b  // BUG: should be a + b
}

module.exports = { greet, add }
