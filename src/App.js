import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;