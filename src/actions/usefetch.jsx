import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            throw Error('could not fetch data');
          }
          const data = await res.json();
          setData(data);
          setIsPending(false);
          setError(null);
        } catch (err) {
          setIsPending(false);
          setError(err.message);
        }
      };
      fetchData();
    }, [url]);
  
    return { data, isPending, error };
  };
  
  export default useFetch;
