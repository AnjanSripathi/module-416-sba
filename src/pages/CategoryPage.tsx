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
            {items && items.meals.map((item) => (
                <div className="grid grid-cols-3 gap-6" key={item.idMeal} >
                    <Link to = {`/recipes/${item.idMeal}`}>
                        <h3>{item.strMeal}</h3>
                        <img src={item.strMealThumb} alt={item.strMeal} />
                    </Link>
                </div>
            ))}
        </div>
    )
}
export default CategoryPage;