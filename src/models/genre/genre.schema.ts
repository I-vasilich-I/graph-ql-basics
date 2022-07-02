import { gql } from "apollo-server";

const genreSchema = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type GetGenres {
    items: [Genre]
  }

  type Query {
    genre(id: ID!): Genre
    genres: GetGenres
  }
`;

export default genreSchema;
