function getSortedData(productData, state) {
    return [...productData].sort((a, b) =>
        state === "low to high"
            ? a.productPrice - b.productPrice
            : b.productPrice - a.productPrice
    );
}

function filterByEachCategory(products, category, filterBy) {
    return products.filter((product) => {
        if (!filterBy[category].length) {
            return true;
        }
        return filterBy[category].includes(product[category]);
    });
}

function getFilteredData(state, filterObj) {
    return Object.keys(filterObj).reduce((filteredProducts, category) => {
        return filterByEachCategory(filteredProducts, category, state.filterBy);
    }, state.productsList);
}

function getPriceData(products, priceState) {
    if (priceState === 0) {
        console.log('0')
        return products;
    }
    console.log('1')
    return products.filter((product) => product.productPrice <= priceState);
}
export { getSortedData, getFilteredData, getPriceData };
