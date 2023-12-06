import React from 'react'

const TodoList = ({ todos }) => {
    return (
        <ol className="mt-2 mb-8" id="todos">
            <h3 className="text-3xl mb-6">Todos list</h3>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2 className="text-lg font-semibold">{todo.title}</h2>
                    <p className="mt-2">{`User: ${todo.user.name}, City: ${todo.user.address.city}`}</p>
                </div>
            ))}
        </ol>
    )
}

export default TodoList
