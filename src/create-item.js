// This module is for DOM manipulation
export default newItemDiv;
import CreateTodoItem from "./todo-items";

const newTodoItem = new CreateTodoItem("DUDE", "WHAT", "WAS THAT");

function newItemDiv(title, desc, dueDate) {
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.classList.add("todo-item");

  const h2 = document.createElement("h2");
  h2.classList.add("title");
  title = newTodoItem.title;
  h2.textContent = "Title: " + title;

  const para1 = document.createElement("p");
  para1.classList.add("description");
  desc = newTodoItem.desc;
  para1.textContent = "Description: " + desc;

  const para2 = document.createElement("p");
  para2.classList.add("due-date");
  dueDate = newTodoItem.dueDate;
  para2.textContent = "Due Date: " + dueDate;

  body.appendChild(div);
  div.appendChild(h2);
  div.appendChild(para1);
  div.appendChild(para2);
};