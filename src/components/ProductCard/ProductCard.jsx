import { AiFillStar } from "../../icons/icons";
import "./ProductCard.css";
function ProductCard({ productCardDetails, btnTxt, productCardIcon }) {
  const ratingsArray = [];
  for (let i = 1; i <= productCardDetails.starRating; i++) {
    ratingsArray.push({
      icon: <AiFillStar key={i} className="size-xs icon" />,
    });
  }

  return (
    <div className="product-card-container" key={productCardDetails.id}>
      <div className="flex w-100 relative product-card">
        <div className="w-100 h-100 relative product-header">
          <div className="flex icon-badge">{productCardIcon}</div>
          <div className="w-100 relative product-img-container">
            <img
              className={`w-100 h-100 absolute inset ${productCardDetails.lazyLoading}`}
              src={productCardDetails.imgUrl}
              alt={productCardDetails.alt}
            />
          </div>
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
          <button className="w-100 btn btn-xs cart-btn">{btnTxt}</button>
        </div>
      </div>
    </div>
  );
}
export { ProductCard };
