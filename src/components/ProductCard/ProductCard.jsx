import { useState } from "react";
import { useCartContext, useWishlistContext ,useAuthContext} from "../../context/context";
import { AiFillStar, FaArrowRight, FaHeart } from "../../icons/icons";
import { Loading } from "../components";
import { Link } from "react-router-dom";

import "./ProductCard.css";
import { isPresentInState } from "../utils";
function ProductCard({ productCardDetails, btnTxt }) {
  const { Cart, addToCart } = useCartContext();
  const { userState } = useAuthContext();
  const { Wishlist, addToWishlist, removeFromWishlist } = useWishlistContext();
  const [wishlistLoader, showWishlistLoader] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const ratingsArray = [];
  for (let i = 1; i <= productCardDetails.starRating; i++) {
    ratingsArray.push({
      icon: <AiFillStar key={i} className="size-xs icon" />,
    });
  }

  function callAddToCart(productCardDetails, state) {
    addToCart(productCardDetails, state);
  }

  return (
    <div className="product-card-container" key={productCardDetails._id}>
      <div className="flex w-100 relative product-card">
        <div className="w-100 h-100 relative product-header">

          { userState.id ?
          isPresentInState(productCardDetails, Wishlist) ? (
            <button
              disabled={wishlistLoader}
              onClick={() =>
                removeFromWishlist(productCardDetails._id, showWishlistLoader)
              }
              className="flex icon-badge"
            >
              {wishlistLoader ? (
                <Loading width="20px" height="20px" />
              ) : (
                <FaHeart className="icon size-xs primary-clr" />
              )}
            </button>
          ) : (
            <button
              disabled={wishlistLoader}
              onClick={() =>
                addToWishlist(productCardDetails, showWishlistLoader)
              }
              className="flex icon-badge"
            >
              {wishlistLoader ? (
                <Loading width="20px" height="20px" />
              ) : (
                <FaHeart className="icon size-xs " />
              )}
            </button>
          ):<button className="flex icon-badge"> <FaHeart className="icon size-xs" /></button>}
          <Link to={`/${productCardDetails._id}`} >
          <div className="w-100 relative product-img-container">
            <img
              className={`w-100 h-100 absolute inset ${productCardDetails.lazyLoading}`}
              src={productCardDetails.imgUrl}
              alt={productCardDetails.alt}
              />
          </div>
              </Link>
        </div>
        <div className="w-100 product-content">
          <span className="product-title lt-bold">
            {productCardDetails.productTitle}
          </span>
          <p className="product-description lt-bold">
            {productCardDetails.productDesc}
          </p>
          <div className="ratings">{ratingsArray.map((star) => star.icon)}</div>
          <div className="relative flex product-price-details">
            <span className="product-price">
              ₹{productCardDetails.productPrice}
            </span>
            <span className="strike-txt og-price txt-grey">
              ₹{productCardDetails.productOgPrice}
            </span>
          </div>
        </div>
        <div className="w-100 product-footer btn-container">

          { userState.id ?
          isPresentInState(productCardDetails, Cart) ? (
            <Link to="/cart">
              <button className="w-100 btn btn-xs cart-btn">
                Go to Cart <FaArrowRight className="icon size-xs" />
              </button>
            </Link>
          ) : (
            <button
              disabled={isAddingToCart}
              className="w-100 btn btn-xs cart-btn"
              onClick={() =>
                callAddToCart(productCardDetails, setIsAddingToCart)
              }
            >
              {isAddingToCart ? <Loading width="20px" height="20px" /> : btnTxt}
            </button>
          ):<button className="w-100 btn btn-xs cart-btn" >Add To Cart</button>}
        </div>
      </div>
    </div>
  );
}
export { ProductCard };
