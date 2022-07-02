import { gql } from "apollo-server";

const trackSchema = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    track: Track
    tracks: [Track]
  }
`;

export default trackSchema;
