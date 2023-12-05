import React from 'react'
import TodoItem from '../pages/todos/TodoItem'

const TodoList = ({ todos }) => {
    return (
        <ol className="mt-12" id="todos">
            <h3 className="text-3xl mb-6">Todos list</h3>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ol>
    )
}

export default TodoList
