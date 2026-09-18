import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoriteContext';
import type { RecipeResponse } from '../context/RecipeType'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
function RecipeDetailPage(){
    const { slug } = useParams();
    const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
    const { items, loading, error } = useFetch<RecipeResponse>(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${slug}`)
    return(
        <div className="max-w-4xl mx-auto p-6">
            <h2>Recipe Details</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {items && (items.meals.map((meal) => {
                const ingredients = []
                for(let i=1; i<=20; i++){
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];
                    if(ingredient){
                        ingredients.push({ ingredient, measure });
                    }
                }
                const isFavorite = favorites.some((fav) => fav.idMeal === meal.idMeal);
                return(
                    <div key = {meal.idMeal} className="bg-white rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold mb-4">{meal.strMeal}</h3>
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full max-h-96 object-cover"/>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mb-6"
                            onClick={() => {
                                if (isFavorite) {
                                    removeFavorite(meal.idMeal);
                                } else {
                                    addFavorite({
                                        idMeal: meal.idMeal,
                                        strMeal: meal.strMeal,
                                        strMealThumb: meal.strMealThumb
                                    });
                                }
                            }}
                        >
                            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>
                        <h4 className="text-2xl font-semibold mb-3">Ingredients:</h4>
                        <div className="mb-6">
                        {ingredients.map((ing)=> (
                            <p>{ing.measure} {ing.ingredient}</p>
                        ))}
                        </div>
                        <h4 className="text-2xl font-semibold mb-3">
                            Instructions
                        </h4>
                        <p className="text-gray-700 leading-relaxed">{meal.strInstructions}</p>
                    </div>
                )
            })
            )}    
            
            
        </div>
    )
}
export default RecipeDetailPage;