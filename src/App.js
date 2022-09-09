import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer'
import {CartContainer} from './components/Cart/CartContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{texto:"hola"}}>
        <Navbar/>
        <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='comidas/:tipoProducto' element={<ItemListContainer/>}/>
          <Route path='item/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
        </main>
        </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
