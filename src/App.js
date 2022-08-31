import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'
import {ItemDetailContainer} from './components/Main/ItemDetailContainer'


function App() {
  return (
    <>
      <Navbar/>
      <main>
      <ItemListContainer/>
      <ItemDetailContainer/>
      </main>
    </>
  );
}

export default App;
