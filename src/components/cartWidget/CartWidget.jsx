import "./CartWidget.css"
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {

    const { cart } = useContext ( CartContext )
    
    const cantidad = cart.reduce( (acc, valorAnterior) => {
        return valorAnterior.quantity + acc; 
    }, 0)

    return(
        <Link to="/cart">
            <div className="container-carrito">
                <BsFillCartCheckFill
                    style={{
                        marginTop:-7,
                        fontSize: "2rem",
                        color: "black",
                    }}
                /> 
                <div className="carrito-counter">
                    <span>{cantidad}</span>
                </div>
            </div>
        </Link>
    )
}