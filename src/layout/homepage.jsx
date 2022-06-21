import Navbar from "../components/navbar"
import { SearchBar } from "../components/searchbar"
import ResultsGrid from "../components/resultsgrid"
import { useState } from "react"

export default function HomePage() {
    const [savedQuery, setSavedQuery] = useState('');
    const [results, setResults] = useState();

    return (
        <div className="App">
            <div className="container mx-auto space-y-4 p-10 max-w-8xl">
                <Navbar />
                <SearchBar
                    setSavedQuery={setSavedQuery}
                    setResults={setResults}
                />
                {results &&
                    <ResultsGrid
                        savedQuery={savedQuery}
                        results={results}
                    />
                }
            </div>
        </div>
    )
}