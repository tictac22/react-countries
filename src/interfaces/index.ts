
export interface Countries  {
    name:string,
    alpha2Code:string,
    capital:string,
    region:string,
    population:number,
    flags: {
        svg : string,
        png :string
    }
}
export interface Regions {
    value:string,
    label:string
}
export type CountriesName = {name:string,alpha2Code:string}[]