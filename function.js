// Function to add a todo item to the list
function addTodoItem(item, list) {
    list.push(item);
    console.log(`${item} added to the list.`);
}

// Function to remove a todo item from the list
function removeTodoItem(item, list) {
    const index = list.indexOf(item);
    if (index !== -1) {
        list.splice(index, 1);
        console.log(`${item} removed from the list.`);
    } else {
        console.log(`${item} not found in the list.`);
    }
}

// Function to display all todo items in the list
function displayTodoList(list) {
    console.log("Todo List:");
    list.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

// Function to mark a todo item as completed
function markAsCompleted(item, list) {
    const index = list.indexOf(item);
    if (index !== -1) {
        console.log(`${item} marked as completed.`);
    } else {
        console.log(`${item} not found in the list.`);
    }
}

// Example usage
let todoList = [];
addTodoItem("Buy groceries", todoList);
addTodoItem("Do laundry", todoList);
addTodoItem("Call mom", todoList);
displayTodoList(todoList);
removeTodoItem("Do laundry", todoList);
displayTodoList(todoList);
markAsCompleted("Call mom", todoList);
displayTodoList(todoList);

