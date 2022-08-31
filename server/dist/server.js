"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const index_1 = require("./graphql/index");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)((req, res) => ({
    schema: index_1.schema,
    graphiql: true,
    context: { req, res },
    formatError: (error) => {
        return { message: "error", error };
    },
})));
app.get("/test", (req, res) => {
    return res.json({ hello: "hello" });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = process.env.PORT || 5000;
    try {
        app.listen(port || 5000, () => console.log(`server has started on PORT:${port}`));
    }
    catch (e) {
        if (e instanceof Error) {
            console.log(e.message);
        }
        console.log(e);
    }
});
main();
