import { Items } from "../item/Items";
import "./ItemsList.css";

export const ItemList = ( {items} ) => {

  return (
    <div className="container-cards">
        {items.map((element) => {
          return (
             <Items key={element.id} element={element} />
          );
         })
        }
    </div>
  )
}

