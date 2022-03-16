import { Routes, Route,} from "react-router-dom";
import MockAPI from "./mock-api";
import { HomePage, MobFilterPanel, ProductListing,  } from "./pages/pages";

function RoutesPath(){
    return(
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element= { <ProductListing />} />
        < Route path= "/filter" element={<MobFilterPanel />} />
        < Route path="/mockman" element={ <MockAPI />} />
    </Routes>
        )
    }
export { RoutesPath}
