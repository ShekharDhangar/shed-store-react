import { CartProductCard, Navbar } from "../../components/components";
import "./Cart.css";
import { useCartContext } from "../../context/context";

function Cart() {
  const { Cart } = useCartContext();
  const cartTotalMRP = Cart.reduce(
    (totalMRP, item) => (totalMRP += (item.productOgPrice*item.qty)),
    0
  );
  const cartTotalPrice = Cart.reduce(
    (totalPrice, item) => (totalPrice += (item.productPrice*item.qty)),
    0
  );
  const cartDiscountAmount = Cart.reduce(
    (totalDiscount, item) =>
      (totalDiscount += (item.productOgPrice - item.productPrice)*item.qty),
    0
  );
  
  const cartDiscountPercent = Math.round(
    (cartDiscountAmount / cartTotalMRP) * 100
  );

  return (
    <>
      <Navbar
        isMenuRequired={false}
        navTxt={"Cart"}
        logoRemove={"logo-remove"}
      />
      <section className="flex cart-container">
        <div className="w-100 cart-products-container">
          {Cart &&
            Cart.map((item) => (
              <CartProductCard productCard={item} key={item._id} />
            ))}
        </div>
        {Cart.length > 0 && (
          <div className="h-100 border-radius cart-price-container">
            <div className="txt-sm border-radius cart-offer-msg ">
              Whistles! Get extra 15% cashback on prepaid orders
            </div>
            <div className="lt-bold cart-summary-container">
              <p className="txt-sm cart-summary-heading lt-bold">
                PRICE SUMMARY
              </p>
              <div className="cart-price-item">
                <p>Total MRP (Incl. of taxes) </p>
                <span>₹{cartTotalMRP}</span>
              </div>
              <div className="cart-price-item">
                <p>Delivery Fee</p>
                <span>₹0</span>
              </div>
              <div className="cart-price-item">
                <p>Bag Discount </p>
                <span>-₹{cartDiscountAmount}</span>
              </div>
              <div className="cart-price-item">
                <p>Subtotal</p>
                <span>₹{cartTotalPrice}</span>
              </div>
              <div className="txt-xs cart-savings-msg">
                <p>
                  You are saving
                  <span> {cartDiscountPercent}% </span>
                  on this order
                </p>
              </div>
            </div>
            <div className="flex cart-action-container">
              <span className="border-radius cart-final-price lt-bold">
                Total <span>Rs {cartTotalPrice}</span>
              </span>
              <button className="w-100 cta-btn btn btn-xs">CONTINUE</button>
            </div>
          </div>
        )}
        {Cart.length === 0 && (
          <div>
            <h1>Hey,it feels so light!</h1>
            <p className="txt-sm">There is nothing in your bag</p>
          </div>
        )}
      </section>
    </>
  );
}

export { Cart };
