import {Axios} from "./Axios";

export function getCategories() {
    return Axios.get(`categories/get?id_website=4`)
}

export const homeService = {
    getCategories
};