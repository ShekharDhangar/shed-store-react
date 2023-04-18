import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

import {
  CartProvider,
  WishlistProvider,
  ProductProvider,
  AlertProvider,
} from "./context/context";
import { AuthProvider } from "./context/AuthContext";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AlertProvider>
        <ProductProvider>
          <CartProvider>
            <WishlistProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </WishlistProvider>
          </CartProvider>
        </ProductProvider>
      </AlertProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorkerRegistration.register();
