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

  type GetFavorites {
    items: [Favorites]
  }

  type Query {
    favorites: GetFavorites
  }
`;

export default favoritesSchema;
