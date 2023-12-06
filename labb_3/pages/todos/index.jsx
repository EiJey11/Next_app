import React, { useState, useEffect, useCallback } from 'react'
import SearchForm from './SearchForm'

const apiUrl = 'https://graphqlzero.almansi.me/api'

const Todo = () => {
    const [todos, setTodos] = useState([])
    const [allTodos, setAllTodos] = useState([])
    const [showDefaultList, setShowDefaultList] = useState(true)

    useEffect(() => {
        makeRequest(`query Todos {
            todos {
                data {
                    id
                    title
                    completed
                    user {
                        name
                        address {
                            city
                        }
                    }
                }
            }
        }`).then((data) => {
            setAllTodos(data.data.todos.data)
            setTodos(data.data.todos.data.slice(0, 10))
        })
    }, [])

    const makeRequest = (query) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ query })
        }).then((res) => res.json())
    }

    const handleSearch = useCallback(
        (searchQuery) => {
            if (searchQuery !== '') {
                const results = allTodos.filter((todo) =>
                    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
                setTodos(results)
                setShowDefaultList(false)
            } else {
                setTodos(allTodos.slice(0, 10))
                setShowDefaultList(true)
            }
        },
        [allTodos]
    )

    return (
        <div className="flex flex-col items-left justify-center ml-24">
            <h1 className="text-3xl font-bold my-[2%]">GraphQL Todos</h1>
            <SearchForm onSearch={handleSearch} />
            <ol className="mt-2 mb-8" id="todos">
                <h3 className="text-3xl mb-6">Todos list</h3>
                {todos.map((todo) => (
                    <div key={todo.id}>
                        <h2 className="text-lg font-semibold">{todo.title}</h2>
                        <p className="mt-2">{`User: ${todo.user.name}, City: ${todo.user.address.city}`}</p>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default Todo
