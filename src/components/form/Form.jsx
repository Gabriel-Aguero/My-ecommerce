import { Button, Grid, TextField, Typography } from "@mui/material"
import "../../components/form/Form.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import SendIcon from '@mui/icons-material/Send';

const Form = () => {
  
  const enviarForm = (data)=>{
    // console.log(data)
  }
   
  const { handleSubmit, handleChange, values, errors } = 
  useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      email: "",
      mensaje: ""
    }, 

    validationSchema: Yup.object().shape( {
      nombre:Yup.string().required("Debes ingresar tu nombre"),
      telefono:Yup.number().required("Debes ingresar tu teléfono"),
      email:Yup.string().required("Debes ingresar Tu email"),
      mensaje: Yup.string(),
    }),

    onSubmit: enviarForm,
  });

  return (
    <div>
      <Typography color="primary" variant="h3" align="center">Formulario de Contacto</Typography>
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
            <Grid item xs={12} md={7}>
              <TextField
                multiline
                type="multiline"
                label="Tu Mensaje"
                variant="outlined"
                fullWidth              
                name="mensaje"
                onChange={handleChange}
                value={values.mensaje}
                error={errors.mensaje}
                helperText={errors.mensaje}
                />
            </Grid>
            <Grid item xs={12} md={12} align="center">
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>Enviar</Button>
            </Grid>
          </Grid>
      </form>
    </div>
  )
}

export default Form