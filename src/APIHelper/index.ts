import axios from "axios";
import {API_URL} from "../config";

export const GetPokemon = async (limit = 5) => {
    return await axios.get(API_URL + `?limit=${limit}`);
};
