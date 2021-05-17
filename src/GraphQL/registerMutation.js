import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation ($record: CreateOneUserInput!) {
    createUser(record: $record) {
      recordId
      record {
        _id
        username
        fullname
        email
        role
      }
    }
  }
`;
