"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryType = void 0;
const graphql_1 = require("graphql");
exports.CountryType = new graphql_1.GraphQLObjectType({
    name: "Country",
    fields: () => ({
        name: { type: graphql_1.GraphQLString },
        topLevelDomain: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        alpha2Code: { type: graphql_1.GraphQLString },
        alpha3Code: { type: graphql_1.GraphQLString },
        callingCodes: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        capital: { type: graphql_1.GraphQLString },
        altSpellings: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        subregion: { type: graphql_1.GraphQLString },
        region: { type: graphql_1.GraphQLString },
        population: { type: graphql_1.GraphQLInt },
        latlng: { type: new graphql_1.GraphQLList(graphql_1.GraphQLInt) },
        demonym: { type: graphql_1.GraphQLString },
        area: { type: graphql_1.GraphQLInt },
        timezones: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        borders: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        nativeName: { type: graphql_1.GraphQLString },
        numericCode: { type: graphql_1.GraphQLString },
        flags: { type: Flags },
        currencies: { type: new graphql_1.GraphQLList(CurrencyCountry) },
        languages: { type: new graphql_1.GraphQLList(Languages) },
        translations: { type: Translations },
        flag: { type: graphql_1.GraphQLString }
    })
});
const CurrencyCountry = new graphql_1.GraphQLObjectType({
    name: "CurrencyCountry",
    fields: () => ({
        code: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        symbol: { type: graphql_1.GraphQLString },
    })
});
const Languages = new graphql_1.GraphQLObjectType({
    name: "CountryLanguages",
    fields: () => ({
        iso639_1: { type: graphql_1.GraphQLString },
        iso639_2: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        nativeName: { type: graphql_1.GraphQLString },
    })
});
const Translations = new graphql_1.GraphQLObjectType({
    name: "Translataions",
    fields: () => ({
        br: { type: graphql_1.GraphQLString },
        pt: { type: graphql_1.GraphQLString },
        nl: { type: graphql_1.GraphQLString },
        hr: { type: graphql_1.GraphQLString },
        fa: { type: graphql_1.GraphQLString },
        de: { type: graphql_1.GraphQLString },
        es: { type: graphql_1.GraphQLString },
        r: { type: graphql_1.GraphQLString },
        ja: { type: graphql_1.GraphQLString },
        it: { type: graphql_1.GraphQLString },
        hu: { type: graphql_1.GraphQLString },
    })
});
const Flags = new graphql_1.GraphQLObjectType({
    name: "FlagsCountry",
    fields: () => ({
        svg: { type: graphql_1.GraphQLString },
        png: { type: graphql_1.GraphQLString },
    })
});
