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
        <div>
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
                    <div key = {meal.idMeal}>
                    <h3>{meal.strMeal}</h3>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <button
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
                    <h4>Ingredients:</h4>
                    {ingredients.map((ing)=> (
                        <p>{ing.measure} {ing.ingredient}</p>
                    ))}
                    <p>{meal.strInstructions}</p>
                    </div>
                )
            })
            )}    
            
            
        </div>
    )
}
export default RecipeDetailPage;