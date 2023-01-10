import { Button, Grid, ButtonBase, Typography, Paper } from "@mui/material"
import React from "react"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import "../cartItem/CartItem.css"
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';

const CartItem = ({ item }) => {

  const { deleteProductById } = useContext( CartContext )
  
  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

  return (
    <Paper
      sx={{
        p: 2,
        margin: '20px',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >

    <Grid container spacing={2} key={item.id}>
      
      <Grid item xs={12} md={6}>
        <ButtonBase sx={{ width: 128, height: 128 }}>
          <Img alt="complex" src={item.imagen} />
        </ButtonBase>
      </Grid>

      <Grid item xs={12} sm container>
        <Grid item xs={12} container direction="column" spacing={2}>
    
          <Grid item>
            <Typography gutterBottom variant="subtitle1" component="div">
              {item.nombre}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {item.descripcion}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Unidades: {item.quantity}
            </Typography>
          </Grid>
      
          <Grid item>
            <Typography variant="subtitle1" component="div">
            Precio: $ {item.precio}
            </Typography>
          </Grid>

          <Grid item>
            <Typography sx={{ cursor: 'pointer' }} variant="body2">
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={()=>deleteProductById(item.id)}>Quitar</Button>
            </Typography>
          </Grid>

        </Grid>
      </Grid>
      
    </Grid>
      
  </Paper>

  )
}

export default CartItem