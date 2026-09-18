export interface Meal {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
    strArea: string | null;
    strCountry: string;
}

export interface Meals {
    meals: Meal[]
}