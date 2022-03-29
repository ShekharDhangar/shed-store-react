import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocalStorageGetItem } from "../customHooks/customHooks";

const CartContext = createContext();
function CartProvider({ children }) {
  const [Cart, setCart] = useState([]);
  async function addToCart(data, loadingState) {
      const userToken = useLocalStorageGetItem("user-token");
    try {
      loadingState(true);
      const response = await axios.post(
        "/api/user/cart",
        { product: data },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      if (response.status === 201) {
        loadingState(false);
        setCart(response.data.cart);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function changeCartQuantity(quantityType, productID) {
    const userToken = useLocalStorageGetItem("user-token");
    try {
      const response = await axios.post(
        `/api/user/cart/${productID}`,
        {
          action: {
            type: quantityType,
          },
        },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      if (response.status === 200) {
        setCart(response.data.cart);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function removeFromCart(productID) {
    const userToken = useLocalStorageGetItem("user-token");
    try {
      const response = await axios.delete(`/api/user/cart/${productID}`, {
        headers: {
          authorization: userToken,
        },
      });
      if (response.status === 200) {
        setCart(response.data.cart);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{ Cart, setCart, addToCart, removeFromCart, changeCartQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCartContext = () => useContext(CartContext);

export { useCartContext, CartProvider };
