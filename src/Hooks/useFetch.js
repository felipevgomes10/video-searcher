import useSWR from 'swr';

const useFetch = (url) => {
    const { data, error } = useSWR(url, async () => {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    });

    return { data, error };
};

export default useFetch;
