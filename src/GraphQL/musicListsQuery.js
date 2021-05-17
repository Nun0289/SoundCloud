import { gql } from "@apollo/client";

export const SHOW_MUSICS_LIST_QUERY = gql`
  query {
    Top10Music: musics(sort: VOTES_DESC, limit: 10) {
      _id
      name
      type
      description
      length
      artistName
      url
      votes
      img
    }
    EdmMusic: musics(filter: { type: "Edm" }) {
      _id
      name
      type
      description
      length
      artistName
      url
      votes
      img
    }
    InterMusic: musics(filter: { type: "Inter" }) {
      _id
      name
      type
      description
      length
      artistName
      url
      votes
      img
    }
    ThaiMusic: musics(filter: { type: "Thai" }) {
      _id
      name
      type
      description
      length
      artistName
      url
      votes
      img
    }
  }
`;
