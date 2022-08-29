import './App.css';
import Navbar from "./components/Navbar/Navbar"
import {ItemListContainer} from './components/Main/ItemListContainer'


function App() {
  return (
    <>
      <Navbar></Navbar>
      <main>
      <ItemListContainer></ItemListContainer>
      </main>
    </>
  );
}

export default App;
