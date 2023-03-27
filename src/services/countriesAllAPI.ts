import  axios  from "axios";
import { Countries } from "../types/countries";

const countriesAllAPI = {
    getCountriesAll: () => {
        return axios.get<Countries[]>('https://restcountries.com/v3.1/all');
    }
}
export default countriesAllAPI;