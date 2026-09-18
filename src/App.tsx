import { Route,Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import NavBar from './pages/NavBar'
import SearchPage from './pages/SearchPage'
import FavoritesPage from './pages/FavoritesPage'

function App(){
  return(
    <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories/:slug" element={<CategoryPage />} />
      <Route path="/recipes/:slug" element={<RecipeDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
    </Routes>
    </div>
  )
}
export default App;
