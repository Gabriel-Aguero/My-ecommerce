import { useState, useEffect } from 'react';
import { products } from "../../productsMock";
import { ItemList } from "../itemList/ItemList";
import { Container } from '@mui/material';
import { ItemCount } from '../itemCount/ItemCount';
import { useParams } from "react-router-dom"


export const ItemListContainer = ( { greeting } ) => {
  
  //const [num, setNum] = useState(0);
  
  //creamos la variable items que almacena el array con la info
  // y la incializamos como un array vacio. 
  const [items, setItems] = useState([]);
  const { categoriaName } = useParams();

  
  
  useEffect(() => {
    
    const productosFilrados = products.filter(productos => productos.categoria === categoriaName);
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoriaName ? productosFilrados : products);
      }, 500);
    });
    
    task 
    .then((res) => {
      setItems(res);
    })
    .catch((err) => {
      console.log("Se rechazo la solicitud");
    });

  }, [ categoriaName ]);

    return (
      <Container fixed>  
      <h2>{greeting}</h2>
      <ItemCount stock={10} initial={0}/>
      <ItemList items={items} />
      </Container>
  )
}
