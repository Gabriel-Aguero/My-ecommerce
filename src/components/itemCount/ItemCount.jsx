import { useState } from 'react'; 
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';

export const ItemCount = ( {stock, initial} ) => {

    const [counter, setCounter] = useState(initial);
    
    const sumar = () =>{
        if(counter < stock) {
            setCounter(counter + 1);
        } 
    }

    const restar = () =>{
        if(counter > initial) {
            setCounter(counter - 1);
        }
    }

  return (
    <Stack spacing={0.5} direction="row">
        <Button size="small" variant="outlined" onClick={restar}>-</Button>
        <Button variant="contained" onClick>Agregar al carrito: {counter}</Button>
        <Button size="small" variant="outlined" onClick={sumar}>+</Button>
        <Button variant="contained" onClick>Stock: {stock}</Button>
    </Stack>
  )
}
