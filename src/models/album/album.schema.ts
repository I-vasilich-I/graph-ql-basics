import { gql } from "apollo-server";

const albumSchema = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    album: Album
    albums: [Album]
  }
`;

export default albumSchema;
