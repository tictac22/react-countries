import cors from "cors"
import express from "express"
import { graphqlHTTP } from "express-graphql"
import { schema } from "./graphql/index"
const app = express()

app.use(
	cors({
		origin: "*",
	})
)
app.use(
	"/graphql",
	graphqlHTTP((req, res) => ({
		schema,
		graphiql: true,
		context: { req, res },
		formatError: (error) => {
			return { message: "error", error }
		},
	}))
)
app.get("/test", (req, res) => {
	return res.json({ hello: "hello" })
})

const main = async () => {
	const port = process.env.PORT || 5000
	try {
		app.listen(port || 5000, () => console.log(`server has started on PORT:${port}`))
	} catch (e) {
		if (e instanceof Error) {
			console.log(e.message)
		}
		console.log(e)
	}
}
main()
