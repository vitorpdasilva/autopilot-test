var express = require('express');
var cors = require('cors');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var faker = require('faker');

const list = [...Array(20)].map((i, index) => (
  {
    key: faker.random.number(),
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    picture: `https://picsum.photos/id/${index}/25/25`
  }
))

var schema = buildSchema(`
  type Query {
    list: [List]!
  }
  type List {
    key: Int
    name: String
    picture: String
  }
`);


var root = {
  list: () => {
    return list
  }
}
var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(9999);
console.log('running graphql api at localhost:9999/graphql')