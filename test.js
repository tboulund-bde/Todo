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

//Assignment illustration

// Assignment
test("Mark as done", async t => {
    const selectBasedOnText = Selector("ul.todo-list li.todo").withText("Put on pants");
    await t
        // Pre-assertion
        .expect(Selector("ul.todo-list li.todo").count).eql(0)
        // Arrange
        .typeText(Selector(".new-todo"), "Put on pants")
        // Act
        .pressKey("enter")
        .click(".toggle")
        // Assert 
        .expect(Selector("ul.todo-list li.todo").count).eql(1);
});