import React, { useState, useEffect } from 'react'
import TodoList from '../../components/TodoList'
import SearchForm from '../../components/SearchForm'

const apiUrl = 'https://graphqlzero.almansi.me/api' //API link

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
            setTodos(data.data.todos.data.slice(0, 10)) // How many todos on main page by default
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
    } // GraphQL Query request

    const handleSearch = (searchQuery) => {
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
    } //Todos by Search or by default

    return (
        <div className="flex flex-col min-h-screen items-left justify-center ml-24">
            <h1 className="text-3xl font-bold my-[2%]">GraphQL Todos</h1>
            <SearchForm onSearch={handleSearch} />
            <TodoList todos={todos} />
        </div>
    )
}

export default Todo