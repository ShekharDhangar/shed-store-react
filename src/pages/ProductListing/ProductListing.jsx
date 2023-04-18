import { Navbar } from "../../components/components";
import { ProductGrid, FilterSortPanel, FilterSortBtn } from "../pages";
import { filtersData, sortsData } from "./FilterSort/filterSortData";
import "./ProductListing.css";
function ProductListing() {
  return (
    <>
      <Navbar
        menuRequired={false}
        navTxt={"Mens Style"}
        logoRemove={"logo-remove"}
      />
      <main>
        <div className="relative filter-product-wrapper">
          <FilterSortPanel filtersData={filtersData} sortsData={sortsData} />
          <ProductGrid />
          <FilterSortBtn />
        </div>
      </main>
    </>
  );
}
export { ProductListing };
