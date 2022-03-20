import { useEffect } from "react";
import { useProductContext } from './context/context';
import { RoutesPath } from './Routes'
import { getProductsData } from './serverCalls/getProductsData';
function App() {
  const { dispatch } = useProductContext();
  async function loadProductsData() {
    dispatch({ type: "LOADER", payload: true });
    const InitialProductsData = await getProductsData();
    if (InitialProductsData) {
      dispatch({ type: "INITIAL PRODUCTS", payload: InitialProductsData })
      dispatch({ type: "LOADER", payload: false });
    }
    const encodedToken = localStorage.getItem("token");
    dispatch({ type: "USERSIGNED", payload: encodedToken })
  }
  useEffect(() => {
    loadProductsData();
  }, []);

  return (
    <div className="App">
      < RoutesPath />
    </div>
  );
}

export default App;
