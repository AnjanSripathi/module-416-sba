import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import type{ Meals } from '../context/MealType';
import { Link } from 'react-router-dom';
function SearchPage(){
    const [searchTerm, setSearchTerm] = useState('');
    const [query, setQuery] = useState('');
    const { items, loading, error } = useFetch<Meals>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    return(
        <div>
            <input 
                type="text" 
                placeholder="Search for a recipe..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={() => setQuery(searchTerm)}>Search</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {query && 
            (items && items.meals && items.meals.length > 0 ? (
                <ul className="grid grid-cols-3 gap-6">
                    {items.meals.map((meal) => (
                        <li key = {meal.idMeal}>
                            <Link to={`/recipes/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} />
                                <p>{meal.strMeal}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found.</p>
            ))}
        </div>
    )
}
export default SearchPage;