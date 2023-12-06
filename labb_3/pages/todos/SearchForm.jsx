import React, { useState } from 'react'

const SearchForm = ({ onSearch, todos }) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchSubmit = (e) => {
        e.preventDefault()
        onSearch(searchQuery.trim())
    }

    return (
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
    )
}

export default SearchForm
