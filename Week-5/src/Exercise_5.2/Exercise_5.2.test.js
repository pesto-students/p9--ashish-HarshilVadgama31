const vowelCount = require('./Exercise_5.2');

test('Exercise_5.2 True Test',()=>{ 
  expect(vowelCount("CaptainAmerica").get('a')).toBe(4);
  expect(vowelCount("CaptainAmerica").get('i')).toBe(2);
  expect(vowelCount("CaptainAmerica").get('e')).toBe(1);
});

test('Exercise_5.2 False Test',()=>{ 
  expect(vowelCount("Stark").get('a')).toBe(2);
});