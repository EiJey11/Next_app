import React, { useState, useEffect, useCallback } from 'react'
import TodoList from './TodoList'
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
            <TodoList todos={todos} />
        </div>
    )
}

export default Todo
