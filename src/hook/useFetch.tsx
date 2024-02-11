import { useState, useEffect } from "react";

function useFetch<T>(url: string) {
    const [data, setData] = useState<T>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

  return { data, loading, error };
}

export default useFetch