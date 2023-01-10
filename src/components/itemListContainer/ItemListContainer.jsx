import { useState, useEffect } from 'react';
import { ItemList } from "../itemList/ItemList";
import { useParams } from "react-router-dom"
import PacmanLoader from "react-spinners/PacmanLoader";
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebaseConfig"


const override = {
  display: "block",
  margin: "20% 50%",
  borderColor: "blue",
};


export const ItemListContainer = ( { greeting } ) => {
  
  //const [num, setNum] = useState(0);
  
  //creamos la variable items que almacena el array con la info
  // y la incializamos como un array vacio. 
  const [items, setItems] = useState([]);
  const { categoriaName } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  
  
  useEffect(() => {
    
    setIsLoading(true);
    
    const itemCollection = collection( db, "products")

    if (categoriaName) {
      const consulta = query( itemCollection, where("categoria" , "==" , categoriaName ) )
      getDocs(consulta)
      .then( (res) => { 
        const products = res.docs.map( product => {
          return {
            id: product.id,
            ...product.data()
          }
        })
        setItems(products)
      })
      .catch( (err) => console.log(err))

    } else {
      getDocs(itemCollection)
        .then( (res) => { 
          const products = res.docs.map( product => {
            return {
              id: product.id,
              ...product.data()
            }
          })
          setItems(products)
        })
        .catch( (err) => console.log(err))
    }

    setTimeout( () => {
      setIsLoading(false)
    }, 1000)

  }, [ categoriaName ]);

    return (
      <div className="light">  
        {isLoading ? 
            <PacmanLoader
            color={"blue"}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          /> : <ItemList items={items} />}
      </div>
  )
}
