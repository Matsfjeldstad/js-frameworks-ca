import { Route, Routes } from 'react-router-dom';
import HomePage from '../components/views/Homepage';
import SpesificProduct from '../components/views/SpesificProduct';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<HomePage />} />
        <Route path="/product/:id" element={<SpesificProduct />} />
      </Routes>
    </>
  );
}

export default Router;
