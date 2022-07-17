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

  input IArtist {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String!
    bandsIds: [String]
    instruments: [String]
  }

  input IUpdateArtist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  type Query {
    artist(id: ID!): Artist
    artists: GetArtists
  }

  type Mutation {
    createArtist(artist: IArtist): Artist
    updateArtist(artist: IUpdateArtist): Artist
    deleteArtist(id: ID!): Delete
  }
`;

export default artistSchema;
