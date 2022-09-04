import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='comidas/:tipoProducto' element={<ItemListContainer/>}/>
        <Route path='/:idProducto' element={<ItemDetailContainer/>}/>
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
