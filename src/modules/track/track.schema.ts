import { gql } from "apollo-server";

const trackSchema = gql`
  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type GetTracks {
    items: [Track]
  }

  input ITrack {
    title: String!
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  input IUpdateTrack {
    id: ID!
    title: String
    albumId: ID
    bandsIds: [ID]
    artistsIds: [ID]
    duration: Int
    released: Int
    genresIds: [ID]
  }

  type Query {
    track(id: ID!): Track
    tracks: GetTracks
  }

  type Mutation {
    createTrack(track: ITrack): Track
    updateTrack(track: IUpdateTrack): Track
    deleteTrack(id: ID!): Delete
  }
`;

export default trackSchema;
