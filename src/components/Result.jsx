export default function Result({ result }) {
    return (
        <div className="max-w-xs overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img
                src={result.largeImageURL}
                alt={result.tags}
                className="h-auto w-full" />
            <a href={result.pageURL}>
                <div className="p-5">
                    <p className="text-medium mb-5 text-gray-700">
                        By {result.user}
                    </p>
                    <button
                        className="w-full rounded-md bg-indigo-600  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
                        See More
                    </button>
                </div>
            </a>

        </div>
    )
}