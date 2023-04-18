import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useLocalStorageGetItem } from "../customHooks/customHooks";

const WishlistContext = createContext();
function WishlistProvider({ children }) {
  const [Wishlist, setWishlist] = useState([]);

  async function addToWishlist(data, loader = null) {
    const userToken = useLocalStorageGetItem("user-token");
    try {
      loader && loader(true);
      const response = await axios.post(
        "/api/user/wishlist",
        { product: data },
        {
          headers: {
            authorization: userToken,
          },
        }
      );
      if (response.status === 201) {
        setWishlist(response.data.wishlist);
        loader && loader(false);
      }
    } catch (error) {
      console.log("error is ", error);
    }
  }

  async function removeFromWishlist(productID, showLoader) {
    const userToken = useLocalStorageGetItem("user-token");
    try {
      showLoader(true);
      const response = await axios.delete(`/api/user/wishlist/${productID}`, {
        headers: {
          authorization: userToken,
        },
      });
      if (response.status === 200) {
        showLoader(false);
        setWishlist(response.data.wishlist);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <WishlistContext.Provider
      value={{ Wishlist, setWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

const useWishlistContext = () => useContext(WishlistContext);
export { useWishlistContext, WishlistProvider };
