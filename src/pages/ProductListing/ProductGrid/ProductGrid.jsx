import { ProductCard } from "../../../components/components";
import "./ProductGrid.css";
import "./ProductGridMedia.css";
import {
  getFilteredData,
  getRatingsData,
  getSortedData,
} from "../filterOperation";
import { filtersData } from "../FilterSort/filterSortData";
import { useProductContext } from "../../../context/productContext";
function ProductGrid() {
  const { productStates } = useProductContext();
  const filteredProductsData = getFilteredData(productStates, filtersData);
  const ratingsData = getRatingsData(
    filteredProductsData,
    productStates.rating
  );
  const sortedProducts = getSortedData(ratingsData, productStates.sortBy);
  const loadings = "loading";
  return (
    <section className="product-list-container">
      {productStates.loader && loadings}
      {sortedProducts.map((card) => (
        <ProductCard
          key={card._id}
          productCardDetails={card}
          btnTxt={"Add to Cart"}
        />
      ))}
    </section>
  );
}

export { ProductGrid };
