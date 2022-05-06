import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";


export const CountryType = new GraphQLObjectType({
	name:"Country",
	fields:() => ({
		name:{type:GraphQLString},
		topLevelDomain:{type:new GraphQLList(GraphQLString)},
		alpha2Code:{type:GraphQLString},
		alpha3Code:{type:GraphQLString},
		callingCodes:{type:new GraphQLList(GraphQLString)},
		capital:{type:GraphQLString},
		altSpellings:{type:new GraphQLList(GraphQLString)},
		subregion:{type:GraphQLString},
		region:{type:GraphQLString},
		population:{type:GraphQLInt},
		latlng:{type:new GraphQLList(GraphQLInt)},
		demonym:{type:GraphQLString},
		area:{type:GraphQLInt},
		timezones:{type:new GraphQLList(GraphQLString)},
		borders:{type:new GraphQLList(GraphQLString)},
		nativeName:{type:GraphQLString},
		numericCode:{type:GraphQLString},
		flags: {type:Flags},
		currencies:{type: new GraphQLList(CurrencyCountry)},
		languages: {type: new GraphQLList(Languages)},
		translations: {type:Translations},
		flag: {type: GraphQLString}
	})
})

const CurrencyCountry = new GraphQLObjectType({
	name:"CurrencyCountry",
	fields:() => ({
		code: {type:GraphQLString},
		name: {type:GraphQLString},
		symbol: {type:GraphQLString},
	})
})
const Languages = new GraphQLObjectType({
	name:"CountryLanguages",
	fields:() => ({
		iso639_1: {type:GraphQLString},
		iso639_2: {type:GraphQLString},
		name: {type:GraphQLString},
		nativeName:{type:GraphQLString},
	})
})
const Translations = new GraphQLObjectType({
	name:"Translataions",
		fields:() => ({
			br:{type:GraphQLString},
			pt:{type:GraphQLString},
			nl:{type:GraphQLString},
			hr: {type:GraphQLString},
			fa: {type:GraphQLString},
			de:{type:GraphQLString},
			es:{type:GraphQLString},
			r:{type:GraphQLString},
			ja:{type:GraphQLString},
			it:{type:GraphQLString},
			hu: {type:GraphQLString},
	})
})
const Flags = new GraphQLObjectType({
	name:"FlagsCountry",
	fields:() => ({
		svg: {type:GraphQLString},
		png: {type:GraphQLString},
	})
})
