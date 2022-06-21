export default function Result({ result }) {
    return (
        <div className="w-80 overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
            <img
                src={result.largeImageURL}
                alt={result.tags}
                className="h-auto w-full" />
            <a href={result.pageURL}>
                <div className="p-5">
                    <p className="text-medium mb-5 text-gray-700">
                        By {result.userImageURL &&
                            <img
                                src={result.userImageURL}
                                className="inline max-h-8 rounded-full"
                                alt="user avatar"
                            />} {result.user} | {result.likes}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-6 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
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
