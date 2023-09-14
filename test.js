// testcafe chrome test.js //

import { Selector } from "testcafe"

fixture`Demo`
    .page("./index.html");



test("Create a new todo", async t => {
    await t
    .expect(Selector(".todo-count").innerText).contains("0")        // Arrange
    .typeText(Selector(".new-todo"), "Water the flowers ")
    // Act
    .pressKey("enter")
    .click(Selector(".toggle")) // Close parenthesis here

    .expect(Selector("todo-count").count).eql(0);

    // Create a pre-assertion that validates that no existing completed tasks are on the list.

    // Write a test yourself that creates a new task, marks it as completed.
    // Assert that the number of completed tasks is now 1.
});




