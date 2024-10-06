const add = require('./stringCalculator');

test('Should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});