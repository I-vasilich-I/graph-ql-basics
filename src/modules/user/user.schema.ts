import { gql } from "apollo-server";

const userSchema = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type Query {
    user(id: ID!): User!
    jwt(email: String!, password: String!): String!
  }
  type Mutation {
    register(firstName: String!, lastName: String!, email: String!, password: String!): User!
  }
`;

export default userSchema;
