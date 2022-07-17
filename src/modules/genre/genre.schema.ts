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

  input IGenre {
    name: String
    description: String
    country: String
    year: Int
  }

  type Delete {
    acknowledged: Boolean
    deletedCount: Int
  }

  type Query {
    genre(id: ID!): Genre
    genres: GetGenres
  }

  type Mutation {
    createGenre(name: String!, description: String!, country: String!, year: Int!): Genre!
    updateGenre(id: ID!, name: String, description: String, country: String, year: Int): Genre!
    deleteGenre(id: ID!): Delete
  }
`;

export default genreSchema;
