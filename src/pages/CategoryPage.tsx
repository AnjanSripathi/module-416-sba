import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import type{ Meals } from '../context/MealType';
import { Link } from 'react-router-dom'
function CategoryPage(){
    const { slug } = useParams();
    const { items, loading, error } = useFetch<Meals>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${slug}`);
    return(
        <div>
            <h2>Category Page = {slug}</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {items && items.meals.map((item) => (
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow" key={item.idMeal} >
                    <Link to = {`/recipes/${item.idMeal}`}>
                        <h3 className="text-xl font-bold p-4">{item.strMeal}</h3>
                        <img className="w-full h-48 object-cover" src={item.strMealThumb} alt={item.strMeal} />
                    </Link>
                </div>
            ))}
            </div>
        </div>
    )
}
export default CategoryPage;