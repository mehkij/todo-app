import CreateTodoItem from "./todo-items";

const newItem = new CreateTodoItem("Title: Something I need to do", 
"Description: I need to do whatever it is that is in the title.", 
"Due Date: Whenever the thing is due.",
"Priority: Whenever who cares.",
"Checklist: Checkkkk");

console.log(newItem.title);
console.log(newItem.desc);
console.log(newItem.dueDate);
console.log(newItem.priority);
console.log(newItem.checklist);