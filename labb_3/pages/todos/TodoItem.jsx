import React from 'react'
import Link from 'next/link'

const TodoItem = ({ todo }) => {
    return (
        <li>
            <div className="flex">
                <h3 className="pr-1 font-semibold">Task:</h3>
                {todo.title}
            </div>
            <Link href={`/todos/${todo.id}`}>
                <li className="ml-4 text-blue-500">More...</li>
            </Link>
        </li>
    )
}

export default TodoItem
