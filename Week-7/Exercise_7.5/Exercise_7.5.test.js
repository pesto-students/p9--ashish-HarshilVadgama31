const perfectDiffPair = require("./Exercise_7.5")

test("Exercise 7.5 True test", ()=>{
    expect(perfectDiffPair([5, 10, 3, 2, 50, 80],78)).toBe(1)
});

// test("Exercise 7.5 False test", ()=>{
//     expect(perfectDiffPair([-10, 20],30)).toBe(0)
// });