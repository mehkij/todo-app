// This module is for manipulating todo items
export default CreateTodoItem;

function CreateTodoItem(title, desc, dueDate, priority, checklist) {
  this.title = title;
  this.desc = desc;
  this.dueDate = dueDate;
  this.priority = priority;
  this.checklist = checklist;
};
