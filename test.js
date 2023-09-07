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
    // Create a pre-assertion that validates that no existing completed tasks are on the list.
    .expect(Selector("ul.todo-list li.todo").count).eql(0)
    // Write a test yourself that creates a new task, marks it as completed.
    .typeText(Selector(".new-todo"), "Walk the dog")
    .pressKey("enter")
    .click(Selector(".toggle"))
    // Assert that the number of completed tasks is now 1.
    .expect(Selector("ul.todo-list li.todo").count).eql(1);
});