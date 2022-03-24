import { useState } from "react";
import { useCartContext, useWishlistContext } from "../../context/context";
import { isPresentInState } from "../utils";
import "./CartProductCard.css";
function CartProductCard({ productCard }) {
  const { removeFromCart, changeCartQuantity } = useCartContext();
  const { Wishlist, addToWishlist } = useWishlistContext();
  const [moveLoader, setMoveLoader] = useState(false);


  function callWishlistAndCart(data) {
    !isPresentInState(data, Wishlist)
      ? addToWishlist(data, setMoveLoader)
      : null;
    removeFromCart(data._id);
  }

  const productPriceSaving =
    productCard.productOgPrice - productCard.productPrice;
  return (
    <div className="border-radius cart-product-box">
      <div className="flex cart-product-content">
        <div className="cart-product-details">
          <div className="cart-product-description">
            <div className="txt-sm card-product-title lt-bold">
              {productCard.productTitle}
            </div>
            <p>{productCard.productDesc}</p>
          </div>
          <span className="cart-product-price lt-bold txt-md">
            ₹{productCard.productPrice}
          </span>
          <span className="cart-og-price strike-txt txt-sm">
            ₹{productCard.productOgPrice}
          </span>
          <div className="txt-sm lt-bold cart-product-msg">
            You saved ₹{productPriceSaving}!
          </div>
          <div className="flex cart-product-options">
            <select name="select-size" className="select-size">
              <option className="selected-size">Size: XS</option>
              <option>Size: SM</option>
              <option>Size: MD</option>
              <option>Size: LG</option>
              <option>Size: XL</option>
              <option>Size: XXL</option>
            </select>
            <div className="flex cart-product-quantity">
              <button
                onClick={() => changeCartQuantity("decrement", productCard._id)}
                className="qty-btn flex "
              >
                -
              </button>
              <div className="qty-value">{productCard.qty}</div>
              <button
                onClick={() => changeCartQuantity("increment", productCard._id)}
                className="qty-btn flex "
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="cart-product-image">
          <img
            className="w-100"
            src={productCard.imgUrl}
            alt={productCard.alt}
          />
        </div>
      </div>
      <div className="cart-btn-container txt-center">
        <button
          onClick={() => removeFromCart(productCard._id)}
          className=" btn btn-sm "
        >
          Remove
        </button>
        <button
          disabled={moveLoader}
          onClick={() => callWishlistAndCart(productCard)}
          className=" btn btn-sm "
        >
          Move to Wishlist
        </button>
      </div>
    </div>
  );
}

export { CartProductCard };
