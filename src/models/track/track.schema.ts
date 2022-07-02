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

  type GetTracks {
    items: [Track]
  }

  type Query {
    track: Track
    tracks: GetTracks
  }
`;

export default trackSchema;
