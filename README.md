# SBA Recipe Explorer

A React + TypeScript application for discovering, searching, and saving meals from the TheMealDB API. The app allows users to browse categories, view recipe details, and keep a personal list of favorite dishes.

## Overview

This project is a recipe discovery app built with Vite and React Router. It provides a simple, responsive interface for exploring meal categories and searching for recipes by name. Each recipe page displays ingredients and step-by-step cooking instructions, and users can add or remove meals from a favorites list.

## How the project works

The app is a single-page recipe browser built around a simple data flow:

1. The user lands on the homepage and the app fetches a list of recipe categories from TheMealDB.
2. Each category card links to a category page, where the app fetches meals belonging to that category.
3. Clicking a meal opens a details page that loads the full recipe, including ingredients and cooking steps.
4. The user can click the favorite button on the detail page to save that meal to a shared favorites list.
5. The Favorites page reads from the same shared list and renders a gallery of saved foods.

This gives the user a seamless browsing experience without navigating away from the app or re-fetching data unnecessarily.

## Favorites context explained

The most important state in this project is the favorites list. It is managed through a React context rather than a local component state so it can be shared across pages.

### Flow of the favorites functionality

- `src/context/FavoriteContext.tsx` defines the data shape and the context API.
- `src/provider/FavoriteProvider.tsx` creates the actual provider that stores the current favorites list.
- `useLocalStorage` is used inside the provider so the favorites are saved in the browser's local storage.
- `main.tsx` wraps the entire app in `FavoritesProvider`, making the favorites state available anywhere in the app.

The context exposes two main actions:

- `addFavorite(recipe)` — adds a recipe to the favorites array
- `removeFavorite(id)` — removes a recipe by its Meal ID

A custom hook keeps the favorites array synchronized with `localStorage`, so when the user refreshes the page, their saved meals remain in the app.

### Example behavior

When a user opens a recipe and clicks `Add to Favorites`:

```tsx
const { favorites, addFavorite } = useContext(FavoritesContext);

addFavorite({
  idMeal: meal.idMeal,
  strMeal: meal.strMeal,
  strMealThumb: meal.strMealThumb,
});
```

This updates the shared favorites list, and the Favorites page automatically re-renders to display the new item.

## Features

- Browse popular food categories from TheMealDB
- Search for meals by keyword
- View detailed recipe information including ingredients and instructions
- Add favorite meals to a dedicated favorites page
- Remove favorites from the recipe detail screen
- Favorites persist in local browser storage
- Responsive layout for desktop and mobile devices

## Tech Stack

- React 19
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS
- TheMealDB API

## Project Structure

```text
sba/
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── context/
│   ├── pages/
│   ├── provider/
│   ├── assets/
│   └── index.css
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

Key areas:

- `src/App.tsx` – main routing configuration
- `src/pages/` – page components for Home, Search, Favorites, and recipe details
- `src/context/` – favorite state and shared data models
- `src/provider/` – context providers used by the app

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev     # Start the Vite development server
npm run build   # Create a production build
npm run lint    # Run ESLint checks
npm run preview # Preview the production build locally
```

## API Integration

The app uses the public TheMealDB API:

- Categories: `https://www.themealdb.com/api/json/v1/1/categories.php`
- Search: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- By category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- Recipe details: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Usage

1. Open the homepage to browse meal categories.
2. Click a category or use the search page to find a recipe.
3. Open a recipe to read ingredients and instructions.
4. Use the favorite button to save recipes.
5. Visit the Favorites page to view saved dishes.

## Notes

- Favorites are managed in React state and are not persisted to a backend database.
- This project is a front-end demo and is designed to showcase React routing, data fetching, and context-based state management.

## License

This project is for educational and demonstration purposes.

