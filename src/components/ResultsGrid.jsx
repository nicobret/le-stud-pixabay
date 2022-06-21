import Result from "./result";
import logo from "../logo.svg";
import { useEffect, useState } from "react";
import { fetchPage } from "../services/search";

export default function ResultsGrid({ query, results }) {
    console.log(query, results);
    const [page, setPage] = useState(0);
    const [displayedResults, setDisplayedResults] = useState(results.hits);
    const [number] = useState(results.totalHits / 20);

    const pagination = [];
    for (let i = 1; i <= number; i++) {
        pagination.push(i)
    }
    console.log('number:', number, 'pagination:', pagination);

    // console.log('displayedResults:', displayedResults);

    function handleChange(event) {
        setPage(event.target.value);
    }

    useEffect(() => {
        async function pagesetter() {
            const data = await fetchPage(query, page);
            setDisplayedResults(data.hits);
        }
        if (page !== 0) {
            pagesetter();
        }
    }, [query, page])

    return (
        <>
            <p>
                You searched for: "{query}".
            </p>
            <p>
                Results provided by
                <a href='https://pixabay.com/fr/'>
                    <img
                        src={logo}
                        alt="pixabay logo"
                        className="max-w-xs"
                    />
                </a>
            </p>
            <br />
            <div className="container mx-auto flex flex-row flex-wrap gap-4">
                {displayedResults?.map(item => <Result result={item} key={item.id} />)}
            </div>
            <br />
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