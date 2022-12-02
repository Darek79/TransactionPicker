export default async function fetchFromDB(url) {
    try {
        const data = await fetch(url, {
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        });
        if (data.status === 200 || data.status === 304) {
            return data.json();
        }
        throw new Error('Something went wrong please try again later');
    } catch (error) {
        if (error) {
            return error.message;
        }
    }
}
