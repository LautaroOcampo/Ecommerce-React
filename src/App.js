import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer'
import {CartContainer} from './components/Cart/CartContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { CartProvider } from './contexts/CartContext';
import { PaginaFirebase } from './components/PaginaFireBase/PaginaFirebase'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <main>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='comidas/:tipoProducto' element={<ItemListContainer/>}/>
          <Route path='item/:idProducto' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
          <Route path='/firebase' element={<PaginaFirebase/>}/>
        </Routes>
        </main>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
