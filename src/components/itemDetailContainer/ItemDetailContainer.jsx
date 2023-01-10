import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../itemDetail/ItemDetail'
import { getDoc, doc, collection } from "firebase/firestore"
import { db } from "../../firebaseConfig"

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  
  const { id } = useParams()

  useEffect(() => {

    // const productSelected = products.find( producto => producto.id === parseInt(id))
    // setProduct(productSelected)
  
    const itemCollection = collection( db, "products")

    //El metodo doc busca por id. hace referencia a un documento especifico
    const sq = doc( itemCollection, id)

    getDoc(sq)
      .then( (res) => {
        setProduct({
           id: res.id,
           ...res.data() 
        })
      })
      .catch( (err) => console.log(err))

  },[id])
  
  return (
   <div>
    <ItemDetail product={product} />
   </div>
  )
}