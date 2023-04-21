import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import AddProduct from './components/AddProduct';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;