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

  type Query {
    band: Band
    bands: [Band]
  }
`;

export default bandSchema;
