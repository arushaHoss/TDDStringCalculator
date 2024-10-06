const add = require('./stringCalculator');

test('Should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('Should return a single number for a single input', () => {
    expect(add("1")).toBe(1);
})