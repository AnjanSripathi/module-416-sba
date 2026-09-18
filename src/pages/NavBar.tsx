import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/search">Search</NavLink></li>
                <li><NavLink to="/favorites">Favorites</NavLink></li>
                {/* <li><NavLink to="/categories/:slug">Categories</NavLink></li>
                <li><NavLink to="/recipes/:slug">Recipes</NavLink></li> */}
            </ul>
        </nav>
    )
}
export default NavBar;