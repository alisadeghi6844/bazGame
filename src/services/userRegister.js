import http from "./httpService";
import config from "./config.json";

export const userRegister = (user) => {
    return http.post(`${config.toplearnapi}/api/register`, JSON.stringify(user));
}