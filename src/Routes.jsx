import { Routes, Route } from "react-router-dom";
import MockAPI from "./mock-api";
import { RequireAuth } from "./pages/AuthenticationPage/AuthRoutes/require-auth";
import { RestrictAuth } from "./pages/AuthenticationPage/AuthRoutes/restrict-auth";
import {
  HomePage,
  MobFilterPanel,
  ProductListing,
  Cart,
  Wishlist
} from "./pages/pages";
import {AuthLogin, AuthSignUp} from './pages/pages'

function RoutesPath() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="shop" element={<ProductListing />} />
      <Route path="/filter" element={<MobFilterPanel />} />
      <Route path="/mockman" element={<MockAPI />} />
      

      <Route element={<RestrictAuth/>} >
      <Route path="/login" element={<AuthLogin />} />
      <Route path="/signup" element={<AuthSignUp />} />
      </Route>
      
      <Route element={<RequireAuth/>} >
      <Route path="/cart" element ={<Cart />} />
      <Route path="/wishlist" element ={<Wishlist />} />   
      </Route>
        

    </Routes>
  );
}
export { RoutesPath };
