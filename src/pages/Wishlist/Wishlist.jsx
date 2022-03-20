import { Navbar, ProductCard } from "../../components/components";
import { useWishlistContext } from "../../context/context";
import { Link } from "react-router-dom";
import "./Wishlist.css";

function Wishlist() {
  const { Wishlist } = useWishlistContext();
  return (
    <>
      <Navbar
        isMenuRequired={false}
        navTxt={"Wishlist"}
        logoRemove={"logo-remove"}
      />
      <section className="product-list-container">
        {Wishlist.map((card) => (
          <ProductCard
            key={card._id}
            productCardDetails={card}
            btnTxt={"Move To Bag"}
            productCardIcon={"TRASH"}
          />
        ))}
        {Wishlist.length == 0 && (
          <div>
            <h1>YOUR WISHLIST IS EMPTY</h1>
            <p className="txt-sm">
              Add items that you like to your wishlist. Review them anytime and
              easily move them to the bag
            </p>

            <Link to="/shop">
              <button className="btn btn-sm">View Products</button>
            </Link>

          </div>
        )}
      </section>
    </>
  );
}

export { Wishlist };
