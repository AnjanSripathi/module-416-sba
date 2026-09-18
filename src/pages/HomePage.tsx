import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'; 
import type { CategoryList } from '../context/FetchContext'

export function HomePage(){
    const { items, loading, error } = useFetch<CategoryList>('https://www.themealdb.com/api/json/v1/1/categories.php');
    return(
        <div >
            <h1>Home Page</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className = "grid grid-cols-3 gap-4">
                {items && items.categories.map((item)=>(
                <Link to={`/categories/${item.strCategory}`} key={item.idCategory}>
                <div>
                    <h3>{item.strCategory}</h3>
                    <img src = {item.strCategoryThumb} alt = {item.strCategory} />
                    <p>{item.strCategoryDescription}</p>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}
export default HomePage;