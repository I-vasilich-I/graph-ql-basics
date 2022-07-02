import { gql } from "apollo-server";

const bandSchema = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type getBands {
    items: [Band]
  }

  type Query {
    band(id: ID!): Band
    bands: getBands
  }
`;

export default bandSchema;
