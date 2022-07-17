import { gql } from "apollo-server";

const favoritesSchema = gql`
  type Favorites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favorites: Favorites
  }
  type Mutation {
    addTrackToFavorites(id: ID!): Favorites
    addBandToFavorites(id: ID!): Favorites
    addArtistToFavorites(id: ID!): Favorites
    addGenreToFavorites(id: ID!): Favorites
  }
`;

export default favoritesSchema;
