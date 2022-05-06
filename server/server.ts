
import express from "express"
import cors from "cors";
import { graphqlHTTP } from "express-graphql"
import { schema } from './graphql/index';
const app = express()


app.use(cors({
	origin:"*"
}))
app.use('/graphql',graphqlHTTP((req,res) => ({
	schema,
	graphiql:true,
	context: {req,res},
	formatError:() => {
		return {message:"error"}
	}
})))
const main = async () => {
	const port = process.env.PORT || 5000
	try {
		app.listen(port || 5000, () => console.log(`server has started on PORT:${port}`))
	}
	catch(e) {
		if(e instanceof Error) {
			console.log(e.message)
		}
		console.log(e)
	}
}
main()
