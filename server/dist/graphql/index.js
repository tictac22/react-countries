"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const query_1 = require("./query");
exports.schema = new graphql_1.GraphQLSchema({
    query: query_1.RootQuery
});
