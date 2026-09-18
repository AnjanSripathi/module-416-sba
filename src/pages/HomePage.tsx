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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                {items && items.categories.map((item)=>(
                <Link to={`/categories/${item.strCategory}`} key={item.idCategory}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold p-4 pb-2">{item.strCategory}</h3>
                    <img className="w-full h-48 object-cover" src = {item.strCategoryThumb} alt = {item.strCategory} />
                    <p className="text-gray-600 px-4 line-clamp-3">{item.strCategoryDescription}</p>
                    <p className="text-blue-600 px-4 pb-4 font-semibold">See more...</p>
                </div>
                </Link>
            ))}
            </div>
        </div>
    )
}
export default HomePage;