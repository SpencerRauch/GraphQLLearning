import express from 'express'
import { graphqlHTTP } from 'express-graphql';
import schema from './data/schema';
const PORT = 8080;

const app = express();

app.get('/',(req,res) => {
    res.send('GraphQL pew pew')
})

// const root = { hello: ()=> "Greetings"}
const root = { product: ()=> {
    return {
        'id': 5318008,
        'name': 'Calculator',
        'description': 'simple lcd display',
        'price': 77.34,
        'soldout': false
    }
}}

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(PORT, () => console.log(`Running server on localhost:${PORT}/graphql`))