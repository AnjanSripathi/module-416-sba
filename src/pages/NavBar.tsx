import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-center gap-8">
                <li className="text-white hover:text-yellow-300 font-semibold"><NavLink to="/">Home</NavLink></li>
                <li className="text-white hover:text-yellow-300 font-semibold"><NavLink to="/search">Search</NavLink></li>
                <li className="text-white hover:text-yellow-300 font-semibold"><NavLink to="/favorites">Favorites</NavLink></li>
                {/* <li><NavLink to="/categories/:slug">Categories</NavLink></li>
                <li><NavLink to="/recipes/:slug">Recipes</NavLink></li> */}
            </ul>
        </nav>
    )
}
export default NavBar;