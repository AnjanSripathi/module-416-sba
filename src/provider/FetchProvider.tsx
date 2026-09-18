import {useEffect, useState} from 'react'
import type { Category } from '../context/FetchContext'
import { FetchContext } from '../context/FetchContext'
interface FetchProviderProps{
    children:React.ReactNode;
}
function FetchProvider({children}: FetchProviderProps){
    const [items, setItems] = useState<Category[]>([]);
    
    useEffect(()=> {
        const fetchPost = async() => {
            try{
                
                const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
                const data = await res.json();
                setItems(data.categories);
            }
            catch(error){
                console.error('Error fetching post:', error);
                
            }
        }
        fetchPost();
    }, [])
    return(
        <div>
            <FetchContext.Provider value = {{ categories: items }}>
            {children}
            </FetchContext.Provider>
        </div>
    )
}
export default FetchProvider;