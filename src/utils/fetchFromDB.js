export default async function fetchFromDB(url) {
    try {
        const data = await fetch(url, {
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        });
        console.log(data);
        if (data.statusText !== 'OK') {
            throw new Error('Something went wrong please try again later');
        }
        return data.json();
    } catch (error) {
        if (error) {
            return error.message;
        }
    }
}
