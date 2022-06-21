import Result from "./result";
import logo from "../logo.svg";
import { useEffect, useState } from "react";
import { fetchPage } from "../services/search";

export default function ResultsGrid({ savedQuery, results }) {
    const [page, setPage] = useState(0);
    const [displayedResults, setDisplayedResults] = useState(results.hits);
    const [number] = useState(results.totalHits / 20);

    const pagination = [];
    for (let i = 1; i <= number; i++) {
        pagination.push(i)
    }

    // console.log('displayedResults:', displayedResults);

    function handleChange(event) {
        setPage(event.target.value);
    }

    useEffect(() => {
        async function pagesetter() {
            const data = await fetchPage(savedQuery, page);
            setDisplayedResults(data.hits);
        }
        if (page !== 0) {
            pagesetter();
        }
    }, [savedQuery, page])

    return (
        <>
            <p>
                You searched for: "{savedQuery}". {results.totalHits} results. Provided by <a href='https://pixabay.com/fr/'>
                    <img
                        src={logo}
                        alt="pixabay logo"
                        className="max-h-5 inline"
                    />
                </a>
            </p>
            <div className="container mx-auto flex flex-row flex-wrap gap-4">
                {displayedResults?.map(item => <Result result={item} key={item.id} />)}
            </div>
            <div>
                Page
                <select
                    name='pages'
                    value={page}
                    onChange={handleChange}
                >
                    {pagination.map(i => (
                        <option key={i} value={i}>{i}</option>
                    ))}
                </select>
                of {number}.
            </div>
        </>
    )
}