import { gql } from "apollo-server";

const memberSchema = gql`
  type Member {
    artist: String
    instrument: String
    years: String
  }
`;

export default memberSchema;
