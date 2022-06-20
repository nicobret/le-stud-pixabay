export async function fetchData(query) {
    const url = `https://pixabay.com/api/?key=28171334-8206875c33d8b2bd8815f2240&q=${query}&image_type=photo&pretty=true`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log('data:', data);
        return data.hits;
    } catch (e) {
        console.error(e);
    }
}