import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { makeServer } from './server';
import { useSignUp } from './customHooks/useSignUp';
import { CartProvider, WishlistProvider, ProductProvider,ToastProvider } from "./context/context"
makeServer();
useSignUp();
ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
    <ToastProvider>
      <ProductProvider>
        <CartProvider>
          <WishlistProvider>
            <App />
          </WishlistProvider>
        </CartProvider>
      </ProductProvider>
    </ToastProvider>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
