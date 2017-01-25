test('adds 1 + 2 to equal 3', () => {
  const sum = require('../sum');
  expect(sum(1, 2)).toBe(3);
});

test('divides 8 / 2 to equal 4', () => {
  const sum = require('../sum');
  expect(sum(8, 2)).toBe(4);
});
