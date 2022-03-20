import "./FilterSortBtn.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MobSort } from "../../../pages";
function FilterSortBtn() {
  const [showMobSort, setShowMobSort] = useState(false);
  return (
    <div className="flex relative w-100 mob-filter-sort-wrapper">
      <button
        onClick={() => setShowMobSort((prev) => !prev)}
        className="btn plain-btn sort-btn"
      >
        SORT
      </button>
      {showMobSort && <MobSort setShowMobSort={setShowMobSort} />}
      <Link to="/filter">
        <button className="btn plain-btn">FILTER</button>
      </Link>
    </div>
  );
}
export { FilterSortBtn };
