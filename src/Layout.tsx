import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import Router from './routes/Router';

function Layout() {
  return (
    <div className="">
      <Header />
      <Router></Router>
      <Footer />
    </div>
  );
}

export default Layout;
