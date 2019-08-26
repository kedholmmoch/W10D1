let todos = [];
let toDoList = document.querySelector('.todos');
let toDoForm = document.querySelector('.add-todo-form');

export const addToDo = function(e) {
  e.preventDefault();
  let addToDo = document.querySelector("input[name=add-todo]").value;
  console.log(addToDo);
  let toDoObj = {
    value: addToDo,
    done: false
  };
  todos.push(toDoObj);
  populateList();
  // document.querySelector("input[name=add-todo]").value = '';
};

export const populateList = function () {
  if (toDoList.children) {
    let children = Array.from(toDoList.children);
    children.forEach((child) => {
      child.remove();
    });
  }
  
  todos.forEach( (todo) => {
    let label = document.createElement("label");
    label.innerHTML = todo.value;
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    label.appendChild(checkbox);
    let toDoLi = document.createElement("li");
    toDoLi.appendChild(label);
    toDoList.appendChild(toDoLi);
  });
};

toDoForm.addEventListener('submit', addToDo);




