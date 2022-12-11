import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/navBar/NavBar";
import  { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
    
       <NavBar />
       
       <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
        
          <Route path="/categoria/:categoriaName" element={ <ItemListContainer /> }/>
          <Route path="/categoria" element={ <ItemListContainer /> }/>
        
          <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        
          <Route path="/carrito" element={<h3>Aqui vista carrito</h3>} />
          <Route path="*" element={<h3>Esta pagina no existe</h3>} />
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
