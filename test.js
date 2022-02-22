const { stringLength, reverseString, capitalized } = require('./index.js');
const Calculator = require('./calculator');
describe('checksum', () => {
  test('Checking string limits Ok', () => {
    let size = 0;
    size = stringLength("Hello");
    expect(size).toBe(5);
  });

  test('Checking string size 0', () => {
    expect(() => stringLength('')).toThrow('String size error');
  });

  test('Checking string size >10', () => {
    expect(() => stringLength('HelloHello2')).toThrow('String size error');
  });
});

test('Check reverseString', () => {
  let reverse = '';
  reverse = reverseString('hello');
  expect(reverse).toBe('olleh');
});

describe('Calculator', () => {
  describe('Sum', () => {
    test('Sum1', () => {
      let calc = new Calculator();
      result = calc.add(2, 2);
      expect(result).toBe(4);
    });
    test('Sum2', () => {
      let calc = new Calculator();
      result = calc.add(1000, 2);
      expect(result).toBe(1002);
    });
    test('Sum3', () => {
      let calc = new Calculator();
      result = calc.add(1972, 50);
      expect(result).toBe(2022);
    });
  });
  describe('Subtract', () => {
    test('Subtract1', () => {
      let calc = new Calculator();
      result = calc.subtract(2, 2);
      expect(result).toBe(0);
    });
    test('Subtract2', () => {
      let calc = new Calculator();
      result = calc.subtract(1000, 2);
      expect(result).toBe(998);
    });
    test('Subtract3', () => {
      let calc = new Calculator();
      result = calc.subtract(1972, 50);
      expect(result).toBe(1922);
    });
  });
  describe('divide', () => {
    test('divide1', () => {
      let calc = new Calculator();
      result = calc.divide(2, 2);
      expect(result).toBe(1);
    });
    test('divide2', () => {
      let calc = new Calculator();
      result = calc.divide(1000, 2);
      expect(result).toBe(500);
    });
    test('divide3', () => {
      let calc = new Calculator();
      result = calc.divide(1972, 50);
      expect(result).toBe(39.44);
    });
  });
  describe('multiply', () => {
    test('multiply1', () => {
      let calc = new Calculator();
      result = calc.multiply(2, 2);
      expect(result).toBe(4);
    });
    test('multiply2', () => {
      let calc = new Calculator();
      result = calc.multiply(1000, 2);
      expect(result).toBe(2000);
    });
    test('multiply3', () => {
      let calc = new Calculator();
      result = calc.multiply(1972, 50);
      expect(result).toBe(98600);
    });
  });
});

test('Capitalized', () => {
  let result = '';
  result = capitalized('hello');
  expect(result).toBe('Hello');
});