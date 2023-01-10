import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ( { children }) => {
  
  const [cart, setCart] = useState([])
  
  const addToCart = ( element ) => {
    if (isInCart (element)) {
        
      let newArray = cart.map( (product) => {

        if (product.id === element.id) {
          let newProduct = {
            ...product,
            quantity: element.quantity,
          }
          return newProduct
        } else {  
          return product
        }
      })

      setCart (newArray)

    } else{
      setCart( [...cart , element])
    } 
  }


  const isInCart = ( item ) => {
    return cart.some( elemento => elemento.id === item.id)
  }

  // Funcion para vaciar el carrito 
  const clearCart = () => {
    setCart( [] )
  }

  // Funcion que determina la cantidad de unidades de un producto
  const getQuantityBiId = ( id )=>{

    const product = cart.find( elemento => elemento.id === id)

    return product?.quantity

  }

  // Funcion que calcula el precio total en el carrito
  const getTotalPrice = ()=>{ 
    
    const total = cart.reduce( (acc, element)=>{
      return acc + (element.precio * element.quantity)
    }, 0 )

    return total

  }

  const getCantidadProducts = () =>{
    const total = cart.reduce( (acc, element)=>{
      return acc + element.quantity
    }, 0 )
    return total
  }

  // Funcion que eliminar un prodcuto del carrito
  const deleteProductById = (id)=>{

    const newArray = cart.filter( product => product.id !== id ) // []

    setCart( newArray )

  }

  const data = {
    cart,
    addToCart,
    clearCart,
    getQuantityBiId,
    getTotalPrice,
    deleteProductById,
    getCantidadProducts
  }
  
    return (
   <CartContext.Provider value={ data }>{ children }</CartContext.Provider>
  )
}

export default CartContextProvider