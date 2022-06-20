import { useState } from "react";

export function SearchBar({setResults}) {
    const [query, setQuery] = useState('');
    
    async function fetchData(query) {
        const url = `https://pixabay.com/api/?key=17555297-46a99d3dc7abf78679ec9e640&q=${query}&image_type=photo&pretty=true`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log('data:', data);
            return data.hits;
        } catch (e) {
            console.error(e);
        }
    }

    function handleChange(event) {
        setQuery(event.target.value)
    }
    
    async function handleSubmit(event) {
        event.preventDefault()
        const results = await fetchData(query);
        setResults(results);
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="What picture are you looking for?"
                    required
                    onChange={handleChange}
                    value={query}
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Search
                </button>
            </div>
        </form>
    )
}
