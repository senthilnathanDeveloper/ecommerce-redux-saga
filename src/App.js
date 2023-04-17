
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct';
import Modal from './Pages/Modal';
import Product from './Pages/Product';
import SingleProducts from './Pages/SingleProducts';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='addProduct' element={<AddProduct/>}/>
        <Route path='list/:id' element={<SingleProducts/>}/>
        <Route path='/modal' element={<Modal/>}/>
      </Routes>
    </div>
  );
}

export default App;
