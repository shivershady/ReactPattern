import {Axios} from "./Axios";

export function getProductById(id) {
    return Axios.get(`products/get?active=1&id_parent=0&id_website=4&id_cat=${id}`)
}

export function filterProduct(id){
    return Axios.get(`filters/get?active=&name=&id_parent=${id}&description=&page=1&offset=100&id_website=4`)
}
export const productService = {
    getProductById,
    filterProduct
};