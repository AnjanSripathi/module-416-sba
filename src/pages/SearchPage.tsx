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
            <div className="flex justify-center gap-3 p-6">
                <input 
                    className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text" 
                    placeholder="Search for a recipe..." 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                onClick={() => setQuery(searchTerm)}>Search</button>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {query && 
            (items && items.meals && items.meals.length > 0 ? (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {items.meals.map((meal) => (
                        <li key = {meal.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <Link to={`/recipes/${meal.idMeal}`}>
                                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover"/>
                                <p className="text-xl font-bold p-4">{meal.strMeal}</p>
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