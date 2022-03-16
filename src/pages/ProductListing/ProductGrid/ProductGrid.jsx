import { FaHeart } from "../../../icons/icons";
import { ProductCard } from "../../../components/components";
import "./ProductGrid.css";
import "./ProductGridMedia.css";
import {
  getFilteredData,
  getPriceData,
  getSortedData,
} from "../filterOperation";
import { filtersData } from "../FilterSort/filterSortData";
import { useReducerContext } from "../../../context/context";
function ProductGrid() {
  const { productStates } = useReducerContext();
  const filteredProductsData = getFilteredData(productStates, filtersData);
  const pricedData = getPriceData(filteredProductsData, productStates.price);
  const sortedProducts = getSortedData(pricedData, productStates.sortBy);

  return (
    <section className="product-list-container">
      {sortedProducts.map((card) => (
        <ProductCard
          key={card.id}
          productCardDetails={card}
          btnTxt={"Add to Cart"}
          productCardIcon={<FaHeart className="size-xs icon " />}
        />
      ))}
    </section>
  );
}

export { ProductGrid };
