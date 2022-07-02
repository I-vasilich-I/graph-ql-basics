import { gql } from "apollo-server";

const artistSchema = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type GetArtists {
    items: [Artist]
  }

  type Query {
    artist(id: ID!): Artist
    artists: GetArtists
  }
`;

export default artistSchema;
