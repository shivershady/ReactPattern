import {Axios} from "./Axios";

export function login(payload) {
    return Axios.post(`/api/login`,payload)
}

export const authService = {
    login
};