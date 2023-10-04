import { Selector } from "testcafe"

// merge test

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
    const selectBasedOnText = Selector("ul.todo-list li.todo").withText("Put on pants");
    await t
        // Pre-assertion
        .expect(Selector("span.todo-count").count).eql(0)
        // Arrange
        .typeText(Selector(".new-todo"), "Put on pants")
        // Act
        .pressKey("enter")
        .click(selectBasedOnText)
        // Assert 
        .expect(Selector("span.todo-count").count).eql(1);


    // Create a pre-assertion that validates that no existing completed tasks are on the list.
    // Write a test yourself that creates a new task, marks it as completed.
    // Assert that the number of completed tasks is now 1.
});