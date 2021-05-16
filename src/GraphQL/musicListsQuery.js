import { gql } from "@apollo/client";

export const SHOW_MUSICS_LIST_QUERY = gql`
  query {
    Top10Music: musics(sort: _ID_ASC) {
      _id
      name
      type
      description
      length
      artistName
      url
    }
    EdmMusic: musics(filter: { type: "EDM" }) {
      _id
      name
      type
      description
      length
      artistName
      url
    }
    InterMusic: musics(filter: { type: "Inter" }) {
      _id
      name
      type
      description
      length
      artistName
      url
    }
    ThaiMusic: musics(filter: { type: "Thai" }) {
      _id
      name
      type
      description
      length
      artistName
      url
    }
  }
`;
