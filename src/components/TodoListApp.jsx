import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { v4 as uuidv4 } from 'uuid'
import './TodoListApp.module.css'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: uuidv4(),
        title,
        completed: false,
      },
    ])
  }

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId))
  }

  const toggleCompleted = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  return {
    todos,
    addTodo,
    removeTodo,
    toggleCompleted,
  }
}

const TodoItem = ({ todo, todoList }) => {
  const handleToggleCompleted = () => {
    todoList.toggleCompleted(todo.id)
  }

  const handleRemoveTodo = () => {
    todoList.removeTodo(todo.id)
  }

  return (
    <div className="todo-item">
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-actions">
        <button
          className="todo-item-toggle"
          onClick={handleToggleCompleted}
          style={{ marginRight: '185px' }}
        >
          {todo.completed ? '✔' : '❌'}
        </button>
        <button className="todo-item-remove" onClick={handleRemoveTodo}>
          🗑
        </button>
      </div>
    </div>
  )
}

const TodoListApp = observer(() => {
  const [newTodoTitle, setNewTodoTitle] = useState('')

  const todoList = TodoList()

  const handleNewTodoChange = (event) => {
    setNewTodoTitle(event.target.value)
  }

  const handleAddTodo = () => {
    todoList.addTodo(newTodoTitle)
    setNewTodoTitle('')
  }

  return (
    <div className="todo-list-app">
      <div className="todo-list">
        <div className="todo-add">
          <input
            type="text"
            value={newTodoTitle}
            onChange={handleNewTodoChange}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        {todoList.todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} todoList={todoList} />
        ))}
      </div>
    </div>
  )
})

export default TodoListApp
