import Navbar from "../components/navbar"
import { SearchBar } from "../components/searchbar"
import ResultsGrid from "../components/resultsgrid"
import { useState } from "react"

export default function HomePage() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState();

    return (
        <div className="App">
            <Navbar />
            <div className="container mx-auto">
                <br/>
                <SearchBar
                    query={query}
                    setQuery={setQuery}
                    setResults={setResults}
                />
                <br/>
                {results &&
                    <ResultsGrid
                        query={query}
                        results={results}
                    />
                }
            </div>
        </div>
    )
}