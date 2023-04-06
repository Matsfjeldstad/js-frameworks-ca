import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import ProductCart from '../components/views/ProductCart';
import SpesificProduct from '../components/views/SpesificProduct';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<SpesificProduct />} />
        <Route path="/cart" element={<ProductCart />} />
      </Routes>
    </>
  );
}

export default Router;
