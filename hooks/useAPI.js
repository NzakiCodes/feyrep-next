import { useEffect, useState } from 'react';
import axios from 'axios';


export default function useAPI(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async()=>{
        try {
            setLoading(true);
            const req = await axios.get(`http://localhost/wordpress/wp-json/wp/v2/${url}`);
            const data = await req.data;

            setData(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
      }
    fetchData()

    }, [url])

    return [data,loading, error];
}