import { createContext } from "react";

export interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
    
}
export interface CategoryList{
    categories: Category[]
}

export const FetchContext = createContext<CategoryList>({
    categories: []
});