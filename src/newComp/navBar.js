import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const NavBar = () => {
    return ( 
        <div>
        <nav className="navbar navbar-light bg-light">
        <div className="container">
            <a className="navbar-brand" href="/">Come&See</a>
                <a className="nav-link" href="/movieList">Nos films</a>
                <a className="nav-link" to ="">Contact</a>
        </div>
    </nav>
    <Outlet />
    </div>
     );
}
 
export default NavBar;