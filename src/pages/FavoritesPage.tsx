import { useContext } from 'react';
import { FavoritesContext } from '../context/FavoriteContext';
import { Link } from 'react-router-dom';

function FavoritesPage(){
    const{favorites} = useContext(FavoritesContext);
    return(
        <div >
            <h2>My Favorites</h2>
            {favorites.length === 0 ? (
                <p>No favorite recipes yet.</p>
            ) : (
                <div className="grid grid-cols-3 gap-6">
                    {favorites.map((fav) => (
                        <div key={fav.idMeal}>
                            <Link to = {`/recipes/${fav.idMeal}`}>
                                <h3>{fav.strMeal}</h3>
                                <img src={fav.strMealThumb} alt={fav.strMeal} />
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default FavoritesPage;