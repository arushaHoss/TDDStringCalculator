const add = require('./stringCalculator');

test('Should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('Should return a single number for a single input', () => {
    expect(add("1")).toBe(1);
});

test('Should return sum of two comma seperated strings', () => {
    expect(add("1,5")).toBe(6);
});

test('Should handle any amount of numbers', () => {
    expect(add("1,2,3,4,5,6")).toBe(21);
});

test('Should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('Should handle different delimeters', () => {
    expect(add("//;\n1;2")).toBe(3);
});

test('Should throw an exception for negative numbers', () => {
    expect(add("1,-2,3,-4")).toBe("Negative numbers not allowed: -2,-4")
});

test('Should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toBe(2)
});

test('Should handle delimeter of any length', () => {
    expect(add("//[***]\n1***2***3")).toBe(6)
});

test('Should handle multiple delimeters', () => {
    expect(add("//[*][%]\n1*2%3")).toBe(6)
});

test('Should handle multiple delimeters with length longer than one char', () => {
    expect(add("//[***][%%%]\n1***2%%%3")).toBe(6)
});