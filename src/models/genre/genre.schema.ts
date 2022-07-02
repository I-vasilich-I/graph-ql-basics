import { gql } from "apollo-server";

const genreSchema = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genre: Genre
    genres: [Genre]
  }
`;

export default genreSchema;
