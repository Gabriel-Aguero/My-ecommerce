import "./item.css";
import { Link } from "react-router-dom"

export const Items = ( { element } ) => {

    return (
        <div className="card">            
            <h2>{element.nombre}</h2>
            <img src={element.imagen} alt="termo"/>
            <h3>${element.precio}</h3>  
           <Link to={`/itemDetail/${element.id}`}>Ver detalle</Link>
        </div>
    )
}

