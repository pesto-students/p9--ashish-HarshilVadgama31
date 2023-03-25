const nextGreater = require("./Exercise_8.5")

test("Exercise 8.5 True Test", () => {
    expect(nextGreater([6,8,0,1,3])).toBe("8 -1 1 3 -1")
})