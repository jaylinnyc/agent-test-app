const { greet, add, subtract, multiply } = require('./app')

describe('greet', () => {
  it('returns greeting with name for valid string', () => {
    expect(greet('Alice')).toBe('Hello, Alice!')
  })

  it('returns default greeting for null', () => {
    expect(greet(null)).toBe('Hello, stranger!')
  })

  it('returns default greeting for undefined', () => {
    expect(greet(undefined)).toBe('Hello, stranger!')
  })

  it('returns default greeting for no argument', () => {
    expect(greet()).toBe('Hello, stranger!')
  })

  it('returns default greeting for number input', () => {
    expect(greet(42)).toBe('Hello, stranger!')
  })

  it('returns default greeting for boolean input', () => {
    expect(greet(true)).toBe('Hello, stranger!')
  })

  it('returns default greeting for object input', () => {
    expect(greet({})).toBe('Hello, stranger!')
  })

  it('handles empty string', () => {
    expect(greet('')).toBe('Hello, !')
  })
})

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5)
  })

  it('adds negative numbers', () => {
    expect(add(-1, -2)).toBe(-3)
  })

  it('adds zero', () => {
    expect(add(0, 5)).toBe(5)
  })

  it('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBe(4)
  })

  it('throws TypeError for string first argument', () => {
    expect(() => add('1', 2)).toThrow(TypeError)
    expect(() => add('1', 2)).toThrow('Both arguments must be numbers')
  })

  it('throws TypeError for string second argument', () => {
    expect(() => add(1, '2')).toThrow(TypeError)
  })

  it('throws TypeError for null argument', () => {
    expect(() => add(null, 2)).toThrow(TypeError)
  })

  it('throws TypeError for undefined argument', () => {
    expect(() => add(1, undefined)).toThrow(TypeError)
  })

  it('throws TypeError for boolean argument', () => {
    expect(() => add(true, 1)).toThrow(TypeError)
  })
})

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(5, 3)).toBe(2)
  })

  it('subtracts negative numbers', () => {
    expect(subtract(-1, -2)).toBe(1)
  })

  it('subtracts zero', () => {
    expect(subtract(5, 0)).toBe(5)
  })

  it('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.5)).toBe(3)
  })

  it('throws TypeError for string first argument', () => {
    expect(() => subtract('5', 3)).toThrow(TypeError)
    expect(() => subtract('5', 3)).toThrow('Both arguments must be numbers')
  })

  it('throws TypeError for string second argument', () => {
    expect(() => subtract(5, '3')).toThrow(TypeError)
  })

  it('throws TypeError for null argument', () => {
    expect(() => subtract(null, 2)).toThrow(TypeError)
  })

  it('throws TypeError for undefined argument', () => {
    expect(() => subtract(1, undefined)).toThrow(TypeError)
  })

  it('throws TypeError for boolean argument', () => {
    expect(() => subtract(true, 1)).toThrow(TypeError)
  })
})

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(2, 3)).toBe(6)
  })

  it('multiplies larger positive numbers', () => {
    expect(multiply(4, 5)).toBe(20)
  })

  it('multiplies negative numbers', () => {
    expect(multiply(-1, -2)).toBe(2)
  })

  it('multiplies by zero', () => {
    expect(multiply(0, 5)).toBe(0)
  })

  it('multiplies decimal numbers', () => {
    expect(multiply(1.5, 2)).toBe(3)
  })

  it('throws TypeError for string first argument', () => {
    expect(() => multiply('2', 3)).toThrow(TypeError)
    expect(() => multiply('2', 3)).toThrow('Both arguments must be numbers')
  })

  it('throws TypeError for string second argument', () => {
    expect(() => multiply(2, '3')).toThrow(TypeError)
  })

  it('throws TypeError for null argument', () => {
    expect(() => multiply(null, 2)).toThrow(TypeError)
  })

  it('throws TypeError for undefined argument', () => {
    expect(() => multiply(1, undefined)).toThrow(TypeError)
  })

  it('throws TypeError for boolean argument', () => {
    expect(() => multiply(true, 1)).toThrow(TypeError)
  })
})
