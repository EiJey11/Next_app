// Users.js
import React, { useState } from 'react'
import TodoItem from './TodoItem'

const apiUrl = 'https://graphqlzero.almansi.me/api'

export default function Users() {
    const [searchQuery, setSearchQuery] = useState('')
    const [todos, setTodos] = useState([])
    const [searchResults, setSearchResults] = useState([])

    const makeRequest = (query) => {
        return fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ query })
        }).then((res) => res.json())
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault()

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
            setTodos(data.data.todos.data)
            const results = data.data.todos.data.filter((todo) =>
                todo.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            setSearchResults(results)
        })
    }

    return (
        <div className="flex flex-col min-h-screen items-left justify-center ml-24 my-[2%]">
            <h1 className="text-3xl font-bold mb-[2%]">GraphQL Todos</h1>
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <input
                        className="mb-8 px-6 py-1 mr-4"
                        type="text"
                        name="searchname"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <input
                        className="bg-slate-900 text-[#ffffff] rounded-sm px-3 py-1 cursor-pointer"
                        type="submit"
                        value="Find"
                    />
                </form>
            </div>
            <ol className="mt-12" id="todos">
                <h3 className="text-3xl mb-6">Todos list</h3>
                {searchResults.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ol>
        </div>
    )
}
