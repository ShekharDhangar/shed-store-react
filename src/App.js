import { useEffect } from "react";
import { useProductContext } from "./context/context";
import { RoutesPath } from "./Routes";
import { getProductsData } from "./serverCalls/getProductsData";
function App() {
  const { dispatch } = useProductContext();
  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: "LOADER", payload: true });
        const encodedToken = localStorage.getItem("token");
        dispatch({ type: "USERSIGNED", payload: encodedToken });
        const InitialProductsData = await getProductsData();
        if (InitialProductsData) {
          dispatch({ type: "INITIAL PRODUCTS", payload: InitialProductsData });
          dispatch({ type: "LOADER", payload: false });
        }
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  return (
    <div className="App">
      <RoutesPath />
    </div>
  );
}

export default App;
