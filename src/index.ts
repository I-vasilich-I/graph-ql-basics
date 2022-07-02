import { ApolloServer } from "apollo-server";
import schemas from "./models/schemas";

const server = new ApolloServer({
  typeDefs: schemas,
  csrfPrevention: true,
  cache: "bounded",
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
