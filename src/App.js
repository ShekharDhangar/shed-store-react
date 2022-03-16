import { useEffect } from "react";
import './App.css';
import { useReducerContext } from './context/context';
import { RoutesPath } from './Routes'
import { getProductsData } from './serverCalls/getProductsData';
function App() {
  const { dispatch } = useReducerContext();
  async function loadProductsData() {

    const InitialProductsData = await getProductsData();
    if (InitialProductsData) {
      dispatch({ type: "INITIAL PRODUCTS", payload: InitialProductsData })
    }
  }
  useEffect(() => {
    loadProductsData();
  },[]);

  return (
    <div className="App">
      < RoutesPath />
    </div>
  );
}

export default App;
