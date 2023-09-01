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

test("Mark as done", async t => {
    await t
        // Pre-assertion
        .expect(Selector("ul.todo-list li.todo.completed").count).eql(0)
        // Arrange
        .typeText(Selector(".new-todo"), "Sweep the floor")
        .pressKey("enter")
        // Act
        .click(Selector("ul.todo-list li.todo input.toggle"))
        // Assert
        .expect(Selector("ul.todo-list li.todo.completed").count).eql(1);
});