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
    name: String!
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
  }

  input UpdateAlbum {
    id: ID!
    name: String
    released: Int
    artistsIds: [ID]
    bandsIds: [ID]
    trackIds: [ID]
    genresIds: [ID]
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
    updateAlbum(album: UpdateAlbum): Album
    deleteAlbum(id: ID!): DeleteAlbum
  }
`;

export default albumSchema;
