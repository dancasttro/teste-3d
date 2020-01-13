import axios from "axios";

const baseUrl = "https://restcountries.eu/rest/v2/";

export const getCountries = () => axios.get(`${baseUrl}all`);;