import React, { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../itemCount/ItemCount'
import { ButtonBase, Grid, Typography, Paper, }from '@mui/material';
import { styled } from '@mui/material/styles';
import Swal from "sweetalert2";

const ItemDetail = ( { product }) => {

    const { addToCart, getQuantityBiId } = useContext ( CartContext )

    const onAdd = ( quantity ) => {
        
        addToCart({
            ...product,
            quantity: quantity
        })
        Swal.fire({
            title: 'Excelente !!!',
            text: 'Agregaste un producto al carrito',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      });
    
    const quantity = getQuantityBiId(product.id)




  return (
    <Paper
    sx={{
        p: 3,
        margin: '80px auto',
        maxWidth: 500,
        flexGrow: 2,
        backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
    >
    <Grid container spacing={2} sx={{justifyContent:"center"}}>
        <Grid item>
            <ButtonBase sx={{ width: 150, height: 100 }}>
                <Img alt="complex" src={product.imagen} />
            </ButtonBase>
        </Grid>
        <Grid item xs={12} sm={12} container>
            <Grid item xs container direction="row" spacing={2}>
                <Grid item xs>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {product.nombre}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        {product.descripcion}
                    </Typography>
                </Grid>
            
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                    Precio: $ {product.precio}
                    </Typography>
                </Grid>
                <Grid item>
                    <ItemCount onAdd={onAdd} stock={product.stock} initial={quantity}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
</Paper>
        
    )
}

export default ItemDetail