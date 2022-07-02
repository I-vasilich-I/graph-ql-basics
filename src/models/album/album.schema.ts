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

  type GetAlbums {
    items: [Album]
  }

  input CreateAlbum {
    name: String
    released: Int
  }

  type DeleteAlbum {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    album(id: ID!): Album
    albums: GetAlbums
  }

  type Mutation {
    createAlbum(album: CreateAlbum): Album
    deleteAlbum(id: ID!): DeleteAlbum
    updateAlbum(album: CreateAlbum): Album
  }
`;

export default albumSchema;
