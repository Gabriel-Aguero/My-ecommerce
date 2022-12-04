import { ItemListContainer } from "./components/itemListContainer/ItemListContainer";
import { NavBar } from "./components/navBar/NavBar";



function App() {
  return (
    <div className="App">
       <NavBar />
       <ItemListContainer greeting={"Bienvenido a mi E-commerce con React. Mi nombre es Gabriel Aguero."}/>
    </div>
  );
}

export default App;
