const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const app = express();

const schema = buildSchema(`
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        hello: String!
        users: [User]
    }
`);

const users = [
  {
    id: "7",
    name: "Aprajita",
    email: "aprajita@gmail.com",
  },
  {
    id: "8",
    name: "Student",
    email: "student@gmail.com",
  },
];

const root = {
  hello: () => {
    return "Hello from GraphQL!";
  },

  users: () => {
    return users;
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.listen(4000, () => {
  console.log("GraphQL server running at http://localhost:4000/graphql");
});
