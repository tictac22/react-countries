import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { CountryType } from './types/country';
import { data } from './../data';


export const RootQuery = new GraphQLObjectType({
	name:"RootQuery",
	fields : {
		getAllCountries: {
			type: new GraphQLList(CountryType),
			args: {
				offset: {type: new GraphQLNonNull(GraphQLInt)},
				limit: {type: new GraphQLNonNull(GraphQLInt)},
			},
			resolve: (parent,{offset,limit}) => {
				return data.slice(offset,limit)
			}
		},
		getCountryByAlpha: {
			type: CountryType,
			args: {
				id: {type: new GraphQLNonNull(GraphQLString)},
			},
			resolve:(parent,{id}) => {
				return data.find(item => item.alpha2Code.toLowerCase() === id.toLowerCase())
			}
		},
		getCountriesName: {
			type: new GraphQLList(CountryType),
			args: {
				countries:{type: GraphQLString}
			},
			resolve:(parent, {countries}) => {
				console.log(countries);
				const loweredArray = countries.split(",").map(item => item.toLowerCase())
				console.log(loweredArray);
				return data.filter(item => {
					return loweredArray.includes(item.alpha3Code.toLowerCase())
				})
			}
		},
		getCountriesByParams: {
			type: new GraphQLList(CountryType),
			args: {
				name : {type: GraphQLString},
				region : {type: GraphQLString},
			},
			resolve: (parent,{name = "",region = ""}) => {
				const filterByRegion = region === "" ? data : data.filter(item => item.region.toLowerCase() === region.toLowerCase())
				const filterByName = name === "" ? filterByRegion : filterByRegion.filter(item => {
					const isName = item.name.toLowerCase().includes(name.toLowerCase())
					const isRegion = region === "" ? true : item.region.toLowerCase() === region.toLowerCase()
					return isName && isRegion
				})
				if(filterByName.length === 0) {
					throw new Error("error")
				}
				return filterByName
			}
		}
	}
})
