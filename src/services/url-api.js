import axios from 'axios';

export async function shortenUrl(longUrl) {
    const apiUrl = import.meta.env.VITE_API_URL;

    try {
        const encodedUrl = encodeURI(longUrl.trim());

        const response = await axios.post(apiUrl, { url: encodedUrl });

        if (response.data && response.data.result_url) {
            return response.data.result_url;
        } else {
            throw new Error('Failed to shorten the URL. No result_url in response.');
        }
    } catch (error) {
        throw new Error(`Error shortening URL: ${error.message}`);
    }
}