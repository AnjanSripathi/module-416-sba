import {useState} from 'react';
import { FavoritesContext, type Favorite } from '../context/FavoriteContext';
import useLocalStorage from '../hooks/useLocalStorage';
function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useLocalStorage<Favorite[]>('favorites', []);
    const addFavorite = (recipe: Favorite) => {
        setFavorites([...favorites, recipe]);
    };
    const removeFavorite = (id: string) => {
        setFavorites(favorites.filter((fav) => fav.idMeal !== id));
    };
    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
export default FavoritesProvider;