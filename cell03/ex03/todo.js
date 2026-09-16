const list = document.getElementById("ft_list");
const newTodoButton = document.getElementById("new-todo");
const cookieName = "todo_list";

function getTodos() {
  const cookie = document.cookie.split("; ").find((item) => item.startsWith(cookieName + "="));
  if (!cookie) return [];
  try { return JSON.parse(decodeURIComponent(cookie.split("=").slice(1).join("="))); } catch { return []; }
}

function saveTodos() {
  const todos = Array.from(list.children, (todo) => todo.textContent);
  document.cookie = cookieName + "=" + encodeURIComponent(JSON.stringify(todos)) + "; max-age=31536000; path=/";
}

function createTodo(text, placeAtTop) {
  const todo = document.createElement("div");
  todo.textContent = text;
  todo.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      todo.remove();
      saveTodos();
    }
  });
  if (placeAtTop) list.prepend(todo); else list.append(todo);
}

newTodoButton.addEventListener("click", () => {
  const text = prompt("Create a new TO DO:");
  if (text !== null && text.trim() !== "") {
    createTodo(text.trim(), true);
    saveTodos();
  }
});

getTodos().forEach((text) => createTodo(text, false));
