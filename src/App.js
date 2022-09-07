import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer'
import {Cart} from './components/Cart/Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='comidas/:tipoProducto' element={<ItemListContainer/>}/>
        <Route path='item/:idProducto' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
