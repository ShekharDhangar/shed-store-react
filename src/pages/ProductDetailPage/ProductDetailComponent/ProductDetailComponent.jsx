import { Navbar } from "../../../components/components";
import { AiFillStar, FaHeart, FaArrowRight } from "../../../icons/icons";
import "./ProductDetailComponent.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Loading } from "../../../components/components";
import {
  useCartContext,
  useWishlistContext,
  useAuthContext,
} from "../../../context/context";
import { isPresentInState } from "../../../components/utils";

function ProductDetailComponent({ card }) {
  const navigate = useNavigate();
  const { Cart, addToCart } = useCartContext();
  const { userState } = useAuthContext();
  const { Wishlist, addToWishlist, removeFromWishlist } = useWishlistContext();
  const [wishlistLoading, showWishlistLoading] = useState(false);
  const [addingToCart, setAddingToCart] = useState(false);
  return (
    <>
      <Navbar menuRequired={false} navTxt={"Back"} logoRemove={"logo-remove"} />
      <section className="product-main-container">
        <div className="w-100 h-100 flex product-container">
          <div className="product-detail-img-container">
            <img className="w-100 " src={card.imgUrl} alt={card.alt} />
          </div>
          <div className="h-100 product-details-container">
            <span className="product-title lt-bold txt-md">
              {card.productTitle}
            </span>
            <p className="product-info lt-bold txt-sm">{card.productDesc}</p>
            <div className="flex product-rating-box">
              <div className="product-rating">
                <span className="flex txt-sm">
                  4
                  <AiFillStar className="size-xs icon" />
                </span>
              </div>
              <div className="product-rating-txt">2k Ratings</div>
            </div>
            <div className="product-price-container">
              <span
                className="product-price
                          txt-md lt-bold"
              >
                ₹{card.productPrice}
              </span>
              <span className="strike-txt txt-sm product-og-price ">
                ₹{card.productOgPrice}
              </span>
              <p className="product-price-msg txt-xs">Inclusive of all taxes</p>
            </div>
            <div className="flex text-center product-size-btn-container">
              <button className="btn btn-sm size-btn ">S</button>
              <button className="btn btn-sm size-btn ">M</button>
              <button className="btn btn-sm size-btn ">L</button>
              <button className="btn btn-sm size-btn ">XL</button>
              <button className="btn btn-sm size-btn ">2XL</button>
            </div>
            <div className="flex cta-btn-container">
              {userState.id ? (
                isPresentInState(card, Cart) ? (
                  <button
                    onClick={() => navigate("/cart")}
                    className="btn btn-sm cart-btn"
                  >
                    Go to Cart <FaArrowRight className="icon size-xs" />
                  </button>
                ) : (
                  <button
                    disabled={addingToCart}
                    className="btn btn-sm cart-btn"
                    onClick={() => addToCart(card, setAddingToCart)}
                  >
                    {addingToCart ? (
                      <Loading width="20px" height="20px" />
                    ) : (
                      `ADD TO CART`
                    )}
                  </button>
                )
              ) : (
                <button className="btn btn-sm cart-btn">ADD TO CART</button>
              )}

              {/* <button className=" add-wishlist-btn">
                <FaHeart className="icon size-xs" />
              </button> */}

              {userState.id ? (
                isPresentInState(card, Wishlist) ? (
                  <button
                    disabled={wishlistLoading}
                    onClick={() =>
                      removeFromWishlist(card._id, showWishlistLoading)
                    }
                    className="add-wishlist-btn"
                  >
                    {wishlistLoading ? (
                      <Loading width="20px" height="20px" />
                    ) : (
                      <FaHeart className="icon size-xs primary-clr" />
                    )}
                  </button>
                ) : (
                  <button
                    disabled={wishlistLoading}
                    onClick={() => addToWishlist(card, showWishlistLoading)}
                    className="add-wishlist-btn"
                  >
                    {wishlistLoading ? (
                      <Loading width="20px" height="20px" />
                    ) : (
                      <FaHeart className="icon size-xs " />
                    )}
                  </button>
                )
              ) : (
                <button className="add-wishlist-btn">
                  {" "}
                  <FaHeart className="icon size-xs" />
                </button>
              )}
            </div>
            <div className="product-description-box">
              <li className=" description-heading lt-bold txt-sm">
                Product Details
              </li>
              <p className="product-detail-description txt-sm">
                {card.productDesc}
              </p>
            </div>
            <li className=" description-heading lt-bold txt-sm">
              Material and Care
            </li>
            <div className="product-detail-description txt-sm">
              <p>Cotton Machine Wash</p>
              <p>Handle with care</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export { ProductDetailComponent };
