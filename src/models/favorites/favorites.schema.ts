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
`;

export default favoritesSchema;
