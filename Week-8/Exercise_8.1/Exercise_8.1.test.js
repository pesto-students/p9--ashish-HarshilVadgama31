let {head, printLinkedList} = require("./Exercise_8.1")

test("Exercise 8.1 True Test",() => {
    expect(printLinkedList(head)).toBe(" 40 --> 30 --> 20 --> 10")
})