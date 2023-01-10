import { Button, Grid, TextField, Typography } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from "formik"
import * as Yup from "yup"
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../../firebaseConfig"

const FormCompra = ( { cart, getTotalPrice, setOrderId, clearCart }) => {

  const total = getTotalPrice();  
  
  const enviarCompra = (data) => {
    const order = {
        buyer: data,
        items: cart,
        total: total,
        date: serverTimestamp()
    }

    const orderCollection = collection(db, "orders")
    addDoc(orderCollection, order).then((res) => setOrderId(res.id))

    cart.map((product) => (
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    ))

    clearCart()  
  }

  const { handleSubmit, handleChange, values, errors } = 
  useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: ""
    }, 

    validationSchema: Yup.object().shape( {
      nombre:Yup.string().required("Debes ingresar tu nombre"),
      telefono:Yup.number().required("Debes ingresar tu teléfono"),
      email:Yup.string().required("Debes ingresar Tu email"),
    }),

    onSubmit: enviarCompra,
  });
  
  return (
    <>
    <Typography color="primary" variant="h3" align="center">Completa el Formulario de Compra</Typography>
    <form onSubmit={handleSubmit} className="form-container">
    <Grid 
    container 
    marginTop={10}
    alignItems={"center"} 
    justifyContent={"space-evenly"}
    spacing={2}
    sx={{width:"100%"}}
    >
    <Grid item xs={12} md={7}>
        <TextField
        type="text"
        label="Tu nombre"
        variant="outlined"                 
        fullWidth
        name="nombre"
        onChange={handleChange}
        value={values.nombre}
        error={errors.nombre}
        helperText={errors.nombre}
        />
    </Grid>

    <Grid item xs={12} md={7}>
        <TextField
        type="number"       
        label="Tu Teléfono"
        variant="outlined"
        fullWidth
        name="telefono"
        onChange={handleChange}
        value={values.telefono}
        error={errors.telefono}
        helperText={errors.telefono}
        />
    </Grid>

    <Grid item xs={12} md={7}>
        <TextField
        type="email"
        label="Tu Email"
        variant="outlined"
        fullWidth              
        name="email"
        onChange={handleChange}
        value={values.email}
        error={errors.email}
        helperText={errors.email}
        />
    </Grid>
    
    <Grid item xs={12} md={12} align="center">
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>Finalizar Compra</Button>
    </Grid>
    </Grid>
    </form>
    </>
  )
}

export default FormCompra

