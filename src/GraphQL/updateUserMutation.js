import { gql } from "@apollo/client";
export const UPDATE_USER_MUTATION = gql`
  mutation ($_id: MongoID!, $record: UpdateByIdUserInput!) {
    updateUserById(_id: $_id, record: $record) {
      record {
        username
        role
        fullname
        email
      }
    }
  }
`;
