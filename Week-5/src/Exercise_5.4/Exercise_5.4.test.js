const mathOperations = require('./Exercise_5.4');

test('Exercise_5.4 True Test',()=>{ 
  expect(mathOperations.sum(2,2)).toBe(4);
  expect(mathOperations.diff(2,2)).toBe(0);
  expect(mathOperations.product(2,2)).toBe(4);
});

test('Exercise_5.4 False Test',()=>{ 
  expect(mathOperations.sum(2,2)).toBe(3);
  expect(mathOperations.diff(2,2)).toBe(1);
  expect(mathOperations.product(2,2)).toBe(5);
});
