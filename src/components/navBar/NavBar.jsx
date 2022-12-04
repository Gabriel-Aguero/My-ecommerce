import { CartWidget } from "../cartWidget/CartWidget";
import "./NavBar.css";


export const NavBar = () => {
    return(
     <div className= "navbar-container">
        <div className="navbar-logo">
            <h2>Stanley</h2>
        </div>
        <ul className="navbar-menu">
            <li>Todos</li>
            <li>Mas de 1 Litro</li>
            <li>Menos de 1 Litro</li>
        </ul>
        <CartWidget />
     </div> 
        
    )
}