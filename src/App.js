import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/navBar/NavBar";
import  { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import  Cart from "./components/cart/Cart.jsx";
import CartContextProvider from "./context/CartContext.jsx"
import Form from "./components/form/Form";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>

       <NavBar />
       
       <Routes>

          <Route path="/" element={ <ItemListContainer /> }/>
        
          <Route path="/categoria/:categoriaName" element={ <ItemListContainer /> }/>
                  
          <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        
          <Route path="/Contacto" element={ <Form /> } />
          <Route path="/cart" element={ <Cart /> } /> 
          <Route path="*" element={<h3>Esta pagina no existe</h3>} />
      
        </Routes>

      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
