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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {favorites.map((fav) => (
                        <div key={fav.idMeal} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <Link to = {`/recipes/${fav.idMeal}`}>
                                <h3 className="text-xl font-bold p-4">{fav.strMeal}</h3>
                                <img src={fav.strMealThumb} alt={fav.strMeal} className="w-full h-48 object-cover"/>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
export default FavoritesPage;