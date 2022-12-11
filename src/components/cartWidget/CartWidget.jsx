import "./CartWidget.css"
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom'


export const CartWidget = () => {
    return(
        <Link to="/carrito">
            <div className="container-carrito">
                <BsFillCartCheckFill
                    style={{
                        fontSize: "2rem",
                        color: "black",
                    }}
                /> 
                <div className="carrito-counter">
                    <span>12</span>
                </div>
            </div>
        </Link>
    )
}