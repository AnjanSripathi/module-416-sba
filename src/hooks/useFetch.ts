// import { useContext } from 'react'
// import { FetchContext } from '../context/FetchContext'
import {useEffect, useState} from 'react'

function useFetch<T>(url: string){
    // const context = useContext(FetchContext);
    if(!url){
        throw new Error('URL is required for useFetch');
    }
    const [items, setItems] = useState<T|null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    useEffect(()=> {
        const fetchPost = async() => {
            try{
                setLoading(true);
                setError(null);
                const res = await fetch(url);
                const data = await res.json();
                setItems(data);
            }
            catch(error){
                console.error('Error fetching categories:', error);
                setError('Failed to fetch categories');
            }
            finally {
                setLoading(false);
            }
        }
        fetchPost();
        
    }, [url]) // If it is []; the url mounts only once on initial render; later it doesn't react to any changes
    return { items, loading, error };
}
// export default FetchProvider;
export default useFetch