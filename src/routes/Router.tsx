import { Route, Routes } from 'react-router-dom';
import HomePage from '../views/Homepage';

function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<div className="text-xl bg-red-100">test</div>} />
      </Routes>
    </>
  );
}

export default Router;
