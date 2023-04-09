import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/views/HomePage';
import ProductCart from '../components/views/ProductCart';
import SpesificProduct from '../components/views/SpesificProduct';
import OrderSuccess from '../components/views/OrderSuccess';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<SpesificProduct />} />
        <Route path="/cart" element={<ProductCart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>
    </>
  );
}

export default Router;
