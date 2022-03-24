import { ProductDetailComponent } from "./ProductDetailComponent/ProductDetailComponent";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/productContext";
function ProductDetailPage() {
  const { productStates } = useProductContext();
  const { productID } = useParams();
  const productDetailCard = productStates.productsList.find(
    (currProduct) => currProduct._id === productID
  );
  return <ProductDetailComponent card={productDetailCard} />;
}
export { ProductDetailPage };
