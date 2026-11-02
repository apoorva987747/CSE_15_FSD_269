Experiment 4 – Basic GraphQL API
Aim
To create a basic GraphQL API using Node.js, Express, and express-graphql.

Objective
To understand how GraphQL schemas, queries, and resolvers are created and used with an Express server.

Technologies Used
Node.js
Express.js
GraphQL
express-graphql
Main File
exp4.js

Description
The program creates a GraphQL API with a User type and a Query type.

The API provides:

A hello query
A users query that returns user details
GraphiQL is enabled to test the API through a browser.

How to Run
From the JS directory:

node Experiment-4/exp4.js
Open the following URL in the browser:

http://localhost:4000/graphql
Sample Query
{
  hello
}
Sample Users Query
{
  users {
    id
    name
    email
  }
}
Expected Result
The GraphiQL interface displays the requested GraphQL query results.

Learning Outcome
This experiment demonstrates the basic implementation of a GraphQL API using Node.js and Express.
