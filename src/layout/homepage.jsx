import Navbar from "../components/navbar"
import {SearchBar} from "../components/searchbar"
import ResultsGrid from "../components/ResultsGrid"
import { useEffect, useState } from "react"

export default function HomePage() {
    const [results, setResults] = useState();

    return (
        <div className="App">
            <Navbar />
            <SearchBar setResults={setResults}/>
            { results &&
                <ResultsGrid results={results}/>
            }
        </div>
    )
}