import axios from "axios";

async function getProductsData() {
    try {
        const initialProductData = await axios.get("/api/products");
        return initialProductData.data.products;
    } catch (error) {
        console.log('Error is', error);
    }
}

export { getProductsData }