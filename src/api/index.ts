import { gql, request } from "graphql-request"

const baseURL = "https://react-countries-backend-production.up.railway.app/graphql"
export const getAllCountries = async (pageParam, page) => {
	const data = await request(
		baseURL,
		gql`
        query {
            getAllCountries(offset:${pageParam},limit:${page}) {
                name,population,region,capital,alpha2Code, flags {png}
            }
        }
    `
	)
	return data.getAllCountries
}
export const getCountriesByParams = async (debouncedValue = "", regionSearch = "") => {
	try {
		const data = await request(
			baseURL,
			gql`
            query {
                getCountriesByParams(name:"${debouncedValue}",region:"${regionSearch}") {
                    name,population,region,capital,alpha2Code, flags {png}
                }
            }
        `
		)
		return data.getCountriesByParams
	} catch (error) {
		return {
			error: true,
		}
	}
}
export const getCountryByCode = async (code) => {
	const data = await request(
		baseURL,
		gql`
            query {
                getCountryByAlpha(id:"${code}") {
                    name,borders,flags {svg},nativeName,population,region,subregion,capital,languages {name},topLevelDomain,currencies {name}
                }
            }
        `
	)
	return data.getCountryByAlpha
}
export const getCountriesName = async (borders) => {
	const dataBorder = borders.join(",")
	console.log(dataBorder)
	const data = await request(
		baseURL,
		gql`
        query {
            getCountriesName(countries:"${dataBorder}") {
                alpha2Code,name
            }
        }
    `
	)
	return data.getCountriesName
}
export const numberWithCommas = (x: number): string => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
