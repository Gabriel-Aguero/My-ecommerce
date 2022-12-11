import { products } from '../../productsMock'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  
  const { id } = useParams()

  useEffect(() => {

    const productSelected = products.find( producto => producto.id === parseInt(id))
    setProduct(productSelected)
  
  },[id])
  
  return (
    <div>
      <h2>Producto: {product.nombre}</h2>
      <img src={product.imagen} alt="Producto"/>
      <h2>Precio: $ {product.precio}</h2>
      <h2>Capacidad: {product.descripcion}</h2>
    </div>
  )
}