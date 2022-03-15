import { Routes, Route,} from "react-router-dom";
import { HomePage,   } from "./pages/pages";
// import {MobFilterPanel} from './pages/pages'

function RoutesPath(){
    return(
        <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="shop" element= { <ProductListing />} />
        < Route path="/filter" element={< MobFilterPanel />} /> */}
    </Routes>
        )
    }
export { RoutesPath}
