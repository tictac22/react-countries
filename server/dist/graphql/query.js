"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootQuery = void 0;
const graphql_1 = require("graphql");
const country_1 = require("./types/country");
const data_1 = require("./../data");
exports.RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllCountries: {
            type: new graphql_1.GraphQLList(country_1.CountryType),
            args: {
                offset: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                limit: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
            },
            resolve: (parent, { offset, limit }) => {
                return data_1.data.slice(offset, limit);
            }
        },
        getCountryByAlpha: {
            type: country_1.CountryType,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
            },
            resolve: (parent, { id }) => {
                return data_1.data.find(item => item.alpha2Code.toLowerCase() === id.toLowerCase());
            }
        },
        getCountriesName: {
            type: new graphql_1.GraphQLList(country_1.CountryType),
            args: {
                countries: { type: graphql_1.GraphQLString }
            },
            resolve: (parent, { countries }) => {
                console.log(countries);
                const loweredArray = countries.split(",").map(item => item.toLowerCase());
                console.log(loweredArray);
                return data_1.data.filter(item => {
                    return loweredArray.includes(item.alpha3Code.toLowerCase());
                });
            }
        },
        getCountriesByParams: {
            type: new graphql_1.GraphQLList(country_1.CountryType),
            args: {
                name: { type: graphql_1.GraphQLString },
                region: { type: graphql_1.GraphQLString },
            },
            resolve: (parent, { name = "", region = "" }) => {
                const filterByRegion = region === "" ? data_1.data : data_1.data.filter(item => item.region.toLowerCase() === region.toLowerCase());
                const filterByName = name === "" ? filterByRegion : filterByRegion.filter(item => {
                    const isName = item.name.toLowerCase().includes(name.toLowerCase());
                    const isRegion = region === "" ? true : item.region.toLowerCase() === region.toLowerCase();
                    return isName && isRegion;
                });
                if (filterByName.length === 0) {
                    throw new Error("error");
                }
                return filterByName;
            }
        }
    }
});
