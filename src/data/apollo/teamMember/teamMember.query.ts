import { gql } from '@apollo/client';
import { teamMemberFragment } from '../fragments';

export const teamMemberCollectionQuery = gql`
  query teamMemberCollection(
    $skip: Int
    $limit: Int
    $preview: Boolean
    $locale: String
    $where: TeamMemberFilter
    $order: [TeamMemberOrder]
  ) {
    teamMemberCollection(skip: $skip, limit: $limit, preview: $preview, locale: $locale, where: $where, order: $order) {
      total
      limit
      skip
      items {
        ...teamMemberFragment
      }
    }
  }
  ${teamMemberFragment}
`;

export const teamMemberQuery = gql`
  query teamMember($id: String!, $preview: Boolean, $locale: String) {
    teamMember(id: $id, preview: $preview, locale: $locale) {
      ...teamMemberFragment
    }
  }
  ${teamMemberFragment}
`;
