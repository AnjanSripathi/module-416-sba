export interface Recipe{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    [key:`strIngredient${number}`]: string;
    [key:`strMeasure${number}`]: string;
}

export interface RecipeResponse{
    meals: Recipe[];
}
// {
//   "meals": [
//     {
//       "strTags": null,
//       "strYoutube": "",
//       "strIngredient1": "Black Eyed Peas",
//       "strIngredient2": "Garlic",
//       "strIngredient3": "Green Chilli",
//       "strIngredient4": "Red Onions",
//       "strIngredient5": "Plain Flour",
//       "strIngredient6": "Salt",
//       "strIngredient7": "Chilli Powder",
//       "strIngredient8": "Baking Powder",
//       "strIngredient9": "Vegetable Oil",
//       "strIngredient10": "Red Onions",
//       "strIngredient11": "Ginger",
//       "strIngredient12": "Garlic",
//       "strIngredient13": "Red Chilli",
//       "strIngredient14": "Raw tiger prawns",
//       "strIngredient15": "Vegetable Oil",
//       "strIngredient16": "Plum Tomatoes",
//       "strIngredient17": "Coriander",
//       "strIngredient18": "Lime",
//       "strIngredient19": "",
//       "strIngredient20": "",
//       "strMeasure1": "800g",
//       "strMeasure2": "1 clove",
//       "strMeasure3": "1",
//       "strMeasure4": "1 small finely diced",
//       "strMeasure5": "2 tablespoons",
//       "strMeasure6": "1 tsp",
//       "strMeasure7": "1 tsp",
//       "strMeasure8": "1 tsp",
//       "strMeasure9": "For frying",
//       "strMeasure10": "1 sliced",
//       "strMeasure11": "1 tablespoon chopped",
//       "strMeasure12": "2 cloves",
//       "strMeasure13": "1 chopped",
//       "strMeasure14": "150g",
//       "strMeasure15": "1 tablespoon",
//       "strMeasure16": "2",
//       "strMeasure17": "1 tablespoon chopped",
//       "strMeasure18": "Juice of 1",
//       "strMeasure19": "",
//       "strMeasure20": "",
//       "strSource": "https://www.bbcgoodfood.com/recipes/caraje-black-eyed-pea-fritters-shrimp-filling",
//       "strImageSource": null,
//       "strCreativeCommonsConfirmed": null,
//       "dateModified": "2026-06-28 21:24:02"
//     }
//   ]
// }