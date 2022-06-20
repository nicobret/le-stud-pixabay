export default function ResultsGrid({results}) {
    console.log('results:', results);
    return (
        <div>{results[0].id}</div>
    )
}