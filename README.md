# SBA Recipe Explorer

A React + TypeScript app for browsing meals, searching by name, viewing recipe details, and saving favorite dishes. The project is built around TheMealDB API and focuses on React Router, fetch logic, and shared state management.

## Overview

This application acts like a lightweight recipe browser. Users can explore categories of meals, search for specific dishes, open individual recipe details, and keep a list of favorite recipes that remains available between page refreshes.

## Features

### 1. Browse categories
The homepage fetches a list of meal categories from TheMealDB and shows each category as a card. Each card links to a category page where recipes in that group are displayed.

### 2. Search for meals by name
The Search page includes a text field and search button. When the user enters a meal name, the app requests results from the TheMealDB search endpoint and renders the matching meals as cards.

### 3. View detailed recipe information
When a recipe is opened, the app loads the full recipe details, including:
- recipe title
- image
- ingredients and measures
- cooking instructions
- add/remove favorite action

### 4. Favorites page
Users can save recipe cards to a dedicated Favorites page. This page reads from the shared favorites list and displays saved meals in a gallery layout.

### 5. Persistent favorites using localStorage
This is the key technical feature of the app. The favorites list is stored in the browser with `localStorage`, meaning it remains available after a refresh and does not disappear immediately when navigation changes.

### 6. Responsive layout
The UI is designed to work on desktop and mobile screens using responsive Tailwind classes.

## How the project works

The app follows a simple front-end flow:

1. The homepage fetches categories from TheMealDB.
2. The user selects a category or searches for a meal by name.
3. The app fetches recipe data based on the selected category or query.
4. Clicking a recipe opens a detail view with full recipe content.
5. The user can add or remove the recipe from favorites.
6. The Favorites page reads the same favorites state and displays all saved meals.

This structure demonstrates how a React app can combine API fetching, route-based navigation, and a shared state layer.

## Favorites: how it works in detail

The most important functionality in this project is the favorites system.

### Why it is stored in context

Favorites need to be shared between different pages. The recipe detail page adds a recipe, and the Favorites page displays it. If this state lived only inside one component, it would not be available everywhere in the app.

The app solves this by using React Context:

- `src/context/FavoriteContext.tsx` defines the favorites value and the `addFavorite` / `removeFavorite` functions
- `src/provider/FavoriteProvider.tsx` provides the actual favorites state to the rest of the app
- `src/main.tsx` wraps the whole app in the provider so all pages can access it

### Why localStorage is important

The favorites are also persisted in the browser using `localStorage` through the custom hook in `src/hooks/useLocalStorage.ts`.

This means:
- the list survives a page refresh
- the saved recipes remain visible when the user comes back later
- the app does not need a backend database to keep the favorites available on the client side

### What this means technically

This is an example of a client-side persistence pattern. It is simple and suitable for a front-end demo, but it is not a production-level multi-user data store because:
- it is only saved in the browser
- it is not shared across devices
- it is not secured or synced with a server

### Example of favorite behavior

```tsx
const { addFavorite } = useContext(FavoritesContext);

addFavorite({
  idMeal: meal.idMeal,
  strMeal: meal.strMeal,
  strMealThumb: meal.strMealThumb,
});
```

This adds the selected recipe to the favorites array, and because the array is stored in context, the Favorites page updates immediately. Because it is also saved in `localStorage`, the data remains after the page reloads.

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
│   ├── hooks/
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

- `src/pages/` – Home, Search, Category, Recipe, and Favorites pages
- `src/context/` – shared favorites context and type definitions
- `src/provider/` – provider components that pass state to the app
- `src/hooks/` – custom hooks such as `useLocalStorage`

## API Integration

The app calls the following public endpoints from TheMealDB:

- Categories: `https://www.themealdb.com/api/json/v1/1/categories.php`
- Search by meal name: `https://www.themealdb.com/api/json/v1/1/search.php?s={query}`
- Filter by category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- Recipe lookup by ID: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id}`

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview the build

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## Usage

1. Open the homepage and browse meal categories.
2. Use the Search page to look up a recipe by name.
3. Click a recipe card to open the details page.
4. Add or remove the recipe from favorites.
5. Open the Favorites page to see saved recipes.

## Notes

- This is a front-end demo project, not a full production recipe backend.
- Favorites are browser-persistent but local to that device/browser.
- The app currently supports search by meal name rather than ingredient filters.

## License

This project is intended for educational and demonstration purposes.



