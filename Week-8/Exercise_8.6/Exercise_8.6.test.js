const queueUsingStack = require("./Exercise_8.6")

test("Exercise 8.6 True Test", () => {
    expect(queueUsingStack('1 2 2 2 1 4').trim()).toBe('2 -1')
})