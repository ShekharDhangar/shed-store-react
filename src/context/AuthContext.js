import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useCartContext } from "./cartContext";
import { useWishlistContext } from "./wishlistContext";
import { useState } from "react";
import {
  useLocalStorageGetItem,
  useLocalStorageSetItem,
} from "../customHooks/customHooks";
const AuthContext = createContext();
function AuthProvider({ children }) {
  const {  setCart } = useCartContext();
  const { setWishlist } = useWishlistContext();
  const [userState, setUserState] = useState({ id: "" });
  const userToken = useLocalStorageGetItem("user-token");
  async function logInUser(email, password, setState) {
    try {
      setState(true);
      const response = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      const encodedToken = response.data.encodedToken;
      if (response) {
        useLocalStorageSetItem("user-token", encodedToken);
        setState(false);
        setUserState({ ...userState, id: encodedToken });
      }
    } catch (error) {
      setState(false);
      console.log(error);
    }
  }
  const guestLogin = async () => {
    try {
      const loginResponse = await axios.post("/api/auth/login", {
        email: "shekhardhangar@yahoo.com",
        password: "shekhar",
      });
      const encodedToken = loginResponse.data.encodedToken;
      if (loginResponse) {
        setUserState({ ...userState, id: encodedToken });
      }

      const getCartData = await axios.get("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (getCartData) {
        setCart(getCartData.data.cart);
      }

      const getWishlistData = await axios.get("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      if (getWishlistData) {
        setWishlist(getWishlistData.data.wishlist);
      }

      useLocalStorageSetItem("user-token", encodedToken);
    } catch (error) {
      console.log(error);
    }
  };

  async function signUpUser(firstName, lastName, email, password, setState) {
    try {
      setState(true);
      const response = await axios.post("/api/auth/signup", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      const encodedToken = response.data.encodedToken;

      if (response) {
        setState(false);
        setUserState({ ...userState, id: encodedToken });
        useLocalStorageSetItem("user-token", encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function logOutUser() {
    localStorage.clear();
    setUserState([]);
  }

  useEffect(() => {
    (async () => {
      try {
        if (userToken) {
          const response = await axios.post("/api/auth/verify", {
            encodedToken: userToken,
          });
          const encodedToken = response.data.encodedToken;
          if (response) {
            setUserState({ ...userState, id: userToken });
          }
          const getCartData = await axios.get("/api/user/cart", {
            headers: {
              authorization: encodedToken,
            },
          });
          if (getCartData) {
            setCart(getCartData.data.cart);
          }
          const getWishlistData = await axios.get("/api/user/wishlist", {
            headers: {
              authorization: encodedToken,
            },
          });
          if (getWishlistData) {
            setWishlist(getWishlistData.data.wishlist);
          }
        }
      } catch (error) {}
    })();
  }, [userToken]);

  return (
    <AuthContext.Provider
      value={{ logInUser, logOutUser, signUpUser, userState, guestLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuthContext = () => useContext(AuthContext);

export { useAuthContext, AuthProvider };
