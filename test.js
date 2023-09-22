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
   
    // Pre-assertion: Validate that no existing completed tasks are on the list initially.
    await t
    .expect(Selector("ul.todo-list li.completed").count).eql(0);

    // Arrange: Create a new task.
    const newTaskName = "Walk the dog"; // Replace with your desired task name.
    await t
        .typeText(Selector(".new-todo"), newTaskName)
        .pressKey("enter");

    // Act: Mark the task as done.
    await t.click(Selector("ul.todo-list li.todo .toggle"));

    // Assert: Verify that the number of completed tasks is now 1.
    await t.expect(Selector("ul.todo-list li.completed").count).eql(1);
});

 