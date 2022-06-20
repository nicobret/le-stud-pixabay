import Navbar from "../components/navbar"
import { SearchBar } from "../components/searchbar"
import ResultsGrid from "../components/resultsgrid"
import { useEffect, useState } from "react"

export default function HomePage() {
    const [results, setResults] = useState();

    return (
        <div className="App">
            <Navbar />
            <div className="container mx-auto">
                <br/>
                <SearchBar setResults={setResults} />
                <br/>
                {results &&
                    <ResultsGrid results={results} />
                }
            </div>
        </div>
    )
}