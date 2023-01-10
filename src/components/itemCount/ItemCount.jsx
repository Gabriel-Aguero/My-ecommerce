import { useState } from 'react'; 
import { Button, Stack } from '@mui/material';
import { useEffect } from 'react';


export const ItemCount = ( {stock, initial = 0, onAdd} ) => {

    const [counter, setCounter] = useState(initial);
    
    useEffect( () => {
        setCounter(initial)
    }, [initial])

    const sumar = () =>{
        if(counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const restar = () =>{
        if(counter > 1) {
            setCounter(counter - 1);
        }
    }
    
  return (
    <>
    <Stack direction="row" spacing={2}>
        <Button size="small" variant="outlined">Cantidad: {counter}</Button>
        <Button size="small" variant="outlined" onClick={restar}>-</Button>
        <Button size="small" variant="contained" onClick={()=> onAdd(counter)}>Agregar al carrito</Button>
        <Button size="small" variant="outlined" onClick={sumar}>+</Button>
    </Stack>
    </>
    
  )
}
