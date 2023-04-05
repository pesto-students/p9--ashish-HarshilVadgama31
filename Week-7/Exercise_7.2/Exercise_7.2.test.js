const SpiralList = require('./Exercise_7.2');


test('Exercise_7.2 True Test',()=>{ 
  expect(SpiralList).toMatchObject([1, 2, 3, 6, 9, 8, 7, 4, 5]);
});
