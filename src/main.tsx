import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ScrollToTop from './utils/ScrollToTop';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Layout />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
