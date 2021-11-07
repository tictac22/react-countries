
import { Countries } from "../interfaces/";
import type { CountriesName } from "../interfaces/";

export const fetchCountry = async (id:string) => {
    const request = await fetch(`https://restcountries.com/v2/alpha/${id}`);
    if(!request.ok) {
        throw new Error("error on server side");
    }
    const json = await request.json();
    return json;
}
export const fetchCountriesName = async(array:string[]):Promise<CountriesName> => {
    const dataBorder = array.join(",");
    const request = await fetch(`https://restcountries.com/v2/alpha?codes=${dataBorder}&fields=name,alpha2Code`);
    if(!request.ok) {
        throw new Error("error on server side");
    }
    const json = await request.json();
    return json
}

export const fetchCountries = async ():Promise<Countries[]> => {
    const response = await fetch(`https://restcountries.com/v2/all?fields=name,population,region,capital,alpha2Code,flags`);
    if(!response.ok) {
        throw new Error("error on server side")
    }
    const json = await response.json();    
    return json;
}
export const  numberWithCommas = (x:number):string => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}