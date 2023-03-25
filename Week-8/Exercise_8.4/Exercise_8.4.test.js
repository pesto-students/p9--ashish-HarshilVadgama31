const array = require("./Exercise_8.4")

test("Exercise 8.4 True Test", () => {
    expect(array.checkParanthesis('[()]{}{()()}')).toBe(true)
})