import { CartWidget } from "../cartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom"

export const NavBar = () => {
    return(
     <div className= "navbar-container">
        <div className="container-logo">
            <img
                className="logo-navbar"
                src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png"
                alt=""
            />
        </div>
        <ul className="navbar">
            <Link className="navbar-item" to="/">Productos</Link>
            <Link className="navbar-item" to="/categoria/clasico">Clasico</Link>
            <Link className="navbar-item" to="/categoria/adventure">Adventure</Link>
        </ul>
        <CartWidget />
     </div> 
        
    );
};