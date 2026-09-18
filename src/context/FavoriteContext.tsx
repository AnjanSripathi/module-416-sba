import { createContext, useState  } from "react";
export interface Favorite {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}

export interface FavoritesContextType {
    favorites: Favorite[];
    addFavorite: (recipe: Favorite) => void;
    removeFavorite: (id: string) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => {},
    removeFavorite: () => {},
});