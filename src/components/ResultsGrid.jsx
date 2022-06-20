import Result from "./result";
import logo from "../logo.svg";

export default function ResultsGrid({ results }) {
    console.log('resultssss:', results);
    return (
        <>
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
                {results.map(item => <Result result={item} key={item.id} />)}
            </div>
        </>
    )
}