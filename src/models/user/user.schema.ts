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
    user(id: ID!): User
  }
`;

export default userSchema;
