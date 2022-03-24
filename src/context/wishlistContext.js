import { createContext, useContext, useState } from "react";
import axios from "axios"

const WishlistContext = createContext();
function WishlistProvider({ children }) {
    const userToken = localStorage.getItem("token");
    const [Wishlist, setWishlist] = useState([])

    async function addToWishlist(data, loader = null) {
        try {
            (loader && loader(true))
            const response = await axios.post("/api/user/wishlist", { product: data }, {
                headers: {
                    authorization: userToken,
                }
            })
            if (response.status === 201) {
                setWishlist(response.data.wishlist);
                (loader && loader(false))
            }
        } catch (error) {
            console.log('error is ', error)
        }
    }

    async function removeFromWishlist(productID, showLoader) {
        try {
            showLoader(true)
            const response = await axios.delete(`/api/user/wishlist/${productID}`,
                {
                    headers: {
                        authorization: userToken
                    }
                })
            if (response.status === 200) {
                showLoader(false);
                setWishlist(response.data.wishlist);
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <WishlistContext.Provider value={{ Wishlist, setWishlist, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    )
}


const useWishlistContext = () => useContext(WishlistContext)
export { useWishlistContext, WishlistProvider }