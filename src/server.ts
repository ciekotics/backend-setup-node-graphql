import express from "express";
import usersRouter from './routes/users'
import { graphqlHTTP } from "express-graphql";

// export function server() {
//   const app = express();

//   app.use("/api/users", usersRouter);
  
//   return app;
// }

const server = express();

server.use(
  "/graphql",
  graphqlHTTP({
    schema: `` as GraphQLSchema,
    rootValue: {},
    graphiql: true,
  })
);
server.use("/api/users", usersRouter)

export default server;