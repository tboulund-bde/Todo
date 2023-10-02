import { Selector } from "testcafe"

fixture`Demo`
    .page("./index.html");

test("Create new todo", async t => {
    await t
        // Pre-assertion
        .expect(Selector("ul.todo-list li.todo").count).eql(0)
        // Arrange
        .typeText(Selector(".new-todo"), "Water the flowers")
        // Act
        .pressKey("enter")
        // Assert
        .expect(Selector("ul.todo-list li.todo").count).eql(1);
});


fixture`Demo`
    .page("./index.html");

test("Mark as done", async t => {
    await t
        .expect(Selector("ul.todo-list li.todo").count).eql(0)
        .typeText(Selector(".new-todo"), "Walk the dog")
        .pressKey("enter")
        .click(".toggle")
        .expect(Selector("ul.todo-list li.todo").count).eql(1);     
});