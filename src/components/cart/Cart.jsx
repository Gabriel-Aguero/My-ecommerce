import { Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { CartContext } from "../../context/CartContext"
import "../cart/Cart.css"
import CartItem from "../cartItem/CartItem"
import FormCompra from "../formCompra/FormCompra";
import "./Cart.css"
import { db } from "../../firebaseConfig"
import { collection, doc, getDoc } from "firebase/firestore"
import Orders from "../orders/Orders";
import { Link } from "react-router-dom";

const Cart = () => {

   const { cart, clearCart, getTotalPrice, getCantidadProducts } = useContext( CartContext )
   const [ buy, setBuy ] = useState(false)
   const [ orderId, setOrderId ] = useState(null)
   const [ order, setOrder ] = useState({})

   const openForm = () => {
    if(cart.length > 0) {
      setBuy(true)
    } else{
      Swal.fire('No cargaste productos en el carrito')
    }
   }

   useEffect(() => {
    if (orderId) {
      const orderCollection = collection(db, "orders")
      const ref = doc(orderCollection, orderId)

      getDoc(ref).then((res) => {
        setOrder({
          id: res.id,
          ...res.data(),
        })
      })
    }
  }, [orderId])

  

   const limpiar =()=>{
    Swal.fire({
      title: 'Estas seguro que deseas vaciar el carrito ?',
      text: "Una vez que lo hagas no podras recuperar la informacion !!!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'El carrito se vacio correctamente !!!',
          'Gracias'
        )
        clearCart()
      } else {
        Swal("Cancelaste la operacion")
      }
    })
   }  

  if (orderId) {
    return (
      <div>        
        <Orders key={order.id} order={order}/>
    
      </div>
    )
  }

  return (

    <Grid container 
      align="center"
      spacing={2}
      marginTop={5}
      justifyContent={"center"}
    >
      <Grid item xs={12} md={12}>     
      
        {cart.map(item => (        
           <CartItem key={item.id} item={item} />                 
         ))}
        
        {cart.length < 1 && 
          <>
          <Typography  color="#263238" variant="h3" marginTop={10}>
            No hay información para mostar
          </Typography>  
          <Typography variant="h4" marginTop={10}>
            <Link to={"/"}>Ir al listado de Productos</Link>
          </Typography>  
          </>       
        }

      </Grid>
      {cart.length > 0 &&      
      <Grid item xs={12} md={12}>
        <Typography color="primary" variant="h4" align="center">Descripcion del carrito</Typography>    

        <h3>Cantidad de productos: { getCantidadProducts() > 0 ? ` ${getCantidadProducts()}` : "No hay items"} </h3>
        <h3>Precio total: { getTotalPrice() > 0 ? ` $ ${ getTotalPrice() }` : "No hay items" }</h3>
        <h3>Descuento: --------- </h3>
        <h3>Precio final: { getTotalPrice() > 0 ? ` $ ${ getTotalPrice() }` : "No hay items" }</h3>
              
        { buy ? 
              <FormCompra 
                cart={cart} 
                getTotalPrice={getTotalPrice}
                setOrderId={setOrderId}
                clearCart={clearCart}
              /> :
              
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={openForm}>Comprar</Button>             
                <Button onClick={() => limpiar()} variant="contained">Vaciar carrito</Button>
              </Stack>
        }
      </Grid>
      }
    </Grid>


    
  )
}

export default Cart