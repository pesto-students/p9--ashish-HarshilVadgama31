const sortArray012 = require('./Exercise_7.3');


test('Exercise_7.2 True Test',()=>{ 
  expect(sortArray012([0,1,2,0,0,1,2,2,0])).toMatchObject([0,0,0,0,1,1,2,2,2]);
});