const hasDuplicate = require('./Exercise_5.3');

test('Exercise_5.3 True Test',()=>{ 
  expect(hasDuplicate([1,2,3,4,5,1,2])).toBe(true);
});

test('Exercise_5.3 False Test',()=>{ 
  expect(hasDuplicate([1,2,3,4,5])).toBe(true);
});