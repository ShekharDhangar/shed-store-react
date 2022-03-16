function isChecked(property, listItem, productStates) {
    return productStates.filterBy[property].includes(listItem);
}
function isSortChecked(){
    return false;
}
const getDynamicPriceRange = (productData) => {
    return productData.reduce(
        (priceRange, productCard) => {
            return [
                Math.min(productCard.productPrice, priceRange[0]),
                Math.max(productCard.productPrice, priceRange[1])
            ];
        },
        [Number.MAX_SAFE_INTEGER, 0]
    );
};
export { isChecked, getDynamicPriceRange }