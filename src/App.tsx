import React from "react"
import { TodoListItem } from "./TodoListItem"

const todos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
]

const App: React.FC = () => {
  return (
    <div>
      <TodoListItem todo={todos[0]} />
      <TodoListItem todo={todos[1]} />
    </div>
  )
}

export default App
