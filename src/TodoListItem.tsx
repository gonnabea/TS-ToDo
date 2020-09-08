import React from "react"

interface TodoListItemProps {
  todo: Todo
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo }) => (
  <li>
    <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
      <input type="checkbox" checked={todo.complete} />
      {todo.text}
    </label>
  </li>
)
